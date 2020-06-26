import LayerRenderer from 'ol/renderer/Layer';
import ImageLayer from 'ol/layer/Image';
import { FrameState } from 'ol/PluggableMap';
import { transformExtent } from 'ol/proj';
import { Program, Shader, Attribute, Uniform, Texture } from './engine/engine.core';
import { bindProgram } from './engine/webgl';
import { rectangle, flattenMatrix, Shape } from './engine/engine.shapes';
import { createTextCanvas } from './engine/engine.helpers';
import Static from 'ol/source/ImageStatic';



export class DtmLayer extends ImageLayer {
    private renderer: DtmImageRenderer;

    constructor(options) {
        super(options);
    }

    createRenderer(): LayerRenderer {
        this.renderer = new DtmImageRenderer(this);
        return this.renderer;
    }

    updateSunAngle(angle: number[]): void {
        this.renderer.updateSunAngle(angle);
    }
}


export class DtmImageRenderer extends LayerRenderer {

    readonly layer: ImageLayer;
    readonly canvas: HTMLCanvasElement;
    readonly gl: WebGLRenderingContext;
    readonly shader: Shader;
    readonly projection;

    constructor(layer: ImageLayer) {
        super(layer);

        // Step 1: setting up canvas
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 800;
        canvas.style.position = 'absolute';

        // Step 2: setting up webgl
        const gl = canvas.getContext('webgl');

        // Step 3: setting up variables for program
        const source = layer.getSource() as Static;
        const currentProjection = source.getProjection();
        const bbox = source.getImageExtent();
        const rectangleInWorldPosition = this.bboxOntoRectangle(2, 2, bbox);
        const image = createTextCanvas('test', 2048, 2048, 'red');

        const imageWrapper = source.getImage(bbox, 0.02197265625, 2.440000295639038, currentProjection);
        imageWrapper.load(); // <-- the arrival of this image can be observed somewhere
        setTimeout(() => {
            const newImage = imageWrapper.getImage() as HTMLImageElement | HTMLCanvasElement;
            this.shader.updateTextureData(this.gl, 'u_srtm', newImage);
            this.shader.bind(this.gl);
        }, 1500);

        // Step 4: setting up program
        const program = new Program(gl, `
            attribute vec3 a_position;
            attribute vec2 a_texturePosition;
            uniform mat3 u_world2pix;
            uniform mat3 u_pix2canv;
            varying vec2 v_texturePosition;
            void main() {
                vec3 pixelPosition = u_world2pix * vec3(a_position.x, a_position.y, 1.);
                vec3 canvasPosition = u_pix2canv * pixelPosition;
                gl_Position = vec4(canvasPosition.x, canvasPosition.y, 0., 1.);
                v_texturePosition = a_texturePosition;
            }
        `, `
            precision mediump float;
            uniform sampler2D u_srtm;
            uniform float u_imageSize;
            uniform vec3 u_sun;
            varying vec2 v_texturePosition;
            void main() {
                float delta = 4. / u_imageSize;
                float top = texture2D(u_srtm, vec2(v_texturePosition.x,         1. - v_texturePosition.y + delta)).r;
                float bot = texture2D(u_srtm, vec2(v_texturePosition.x,         1. - v_texturePosition.y - delta)).r;
                float lft = texture2D(u_srtm, vec2(v_texturePosition.x + delta, 1. - v_texturePosition.y        )).r;
                float rgt = texture2D(u_srtm, vec2(v_texturePosition.x - delta, 1. - v_texturePosition.y        )).r;

                vec3 surfaceNormal = vec3(
                    lft - rgt,
                    bot - top,
                    2. * delta
                );
                surfaceNormal = normalize(surfaceNormal);
                vec3 sunNormal = normalize(u_sun);
                float alignment = abs(dot(sunNormal, surfaceNormal));

                gl_FragColor = vec4(0., 0., 0., 0.5 * alignment);
            }
        `);
        bindProgram(gl, program.program); // todo: is this required?

        const shader = new Shader(
            program,
            [
                new Attribute(gl, program, 'a_position', rectangleInWorldPosition.vertices),
                new Attribute(gl, program, 'a_texturePosition', rectangleInWorldPosition.texturePositions)
            ], [
                new Uniform(gl, program, 'u_imageSize', '1f', [2048.]),
                new Uniform(gl, program, 'u_sun', '3f', [0., 0., 1.]),  // array, pointing to sun from middle of map.
                new Uniform(gl, program, 'u_world2pix', 'matrix3fv', flattenMatrix([
                    [1., 0., 0.],
                    [0., 1., 0.],
                    [0., 0., 1.]
                ])),
                new Uniform(gl, program, 'u_pix2canv', 'matrix3fv', flattenMatrix([
                    [1. /  (canvas.width / 2),  0.,                        0. ],
                    [0,                        -1. / (canvas.height / 2),  0. ],
                    [-1.,                      1.,                         1. ]
                ]))
            ], [
                new Texture(gl, program, 'u_srtm', image, 0)
            ]
        );
        shader.bind(gl);


        this.shader = shader;
        this.layer = layer;
        this.canvas = canvas;
        this.gl = gl;
        this.projection = currentProjection;
    }


    prepareFrame(frameState: FrameState): boolean {
        const c2pT = frameState.coordinateToPixelTransform;
        const worldToPixelTransform = [
            [c2pT[0],   c2pT[1],    0. ],
            [c2pT[2],   c2pT[3],    0. ],
            [c2pT[4],   c2pT[5],    1. ]
        ];
        this.shader.updateUniformData(this.gl, 'u_world2pix', flattenMatrix(worldToPixelTransform));
        this.shader.bind(this.gl); // <--- @TODO: inefficient! Only re-bind world2pix matrix.

        if (frameState.viewState.projection !== this.projection) {
            this.reprojectImage(frameState.viewState.projection);
        }

        return true;
    }


    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement {
        this.shader.render(this.gl);
        this.transformCanvas(frameState);
        return this.canvas;
    }


    updateSunAngle(angle: number[]): void {
        this.shader.updateUniformData(this.gl, 'u_sun', [angle[0], angle[1], 1.0]);
        this.shader.bind(this.gl);
        this.shader.render(this.gl);
    }


    private bboxOntoRectangle(width: number, height: number, bbox: number[]): Shape {
        const rect = rectangle(width, height);
        for (const vertex of rect.vertices) {
            const x = vertex[0];
            const y = vertex[1];
            vertex[0] = (x === width / 2) ? bbox[2] : bbox[0];
            vertex[1] = (y === height / 2) ? bbox[3] : bbox[1];
        }
        return rect;
    }

    private reprojectImage(targetProjection): void {
        const source = this.layer.getSource();
        const sourceProjection = source.getProjection();
        const bbox = source.getImageExtent();
        const bboxInTargetProj = transformExtent(bbox, sourceProjection, targetProjection);
        const newRectangleInWorldPosition = this.bboxOntoRectangle(2, 2, bboxInTargetProj);
        this.shader.updateAttributeData(this.gl, 'a_position', newRectangleInWorldPosition.vertices);
        this.shader.bind(this.gl);
    }

    private transformCanvas(frameState: FrameState): void {
        const layerState = frameState.layerStatesArray[frameState.layerIndex];
        const pixelRatio = frameState.pixelRatio;
        const size = frameState.size;
        const width = Math.round(size[0] * pixelRatio);
        const height = Math.round(size[1] * pixelRatio);
        const opacity = layerState.opacity;

        // this.canvas.width = width;
        // this.canvas.height = height;
        this.canvas.style.opacity = opacity;

        // @TODO: update shader parameters
    }
}
