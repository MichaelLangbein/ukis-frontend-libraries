/**
 * OWS Context Service 
 * OGC OWS Context Geo Encoding Standard Version: 1.0
 * http://docs.opengeospatial.org/is/14-055r2/14-055r2.html
 * http://www.owscontext.org/owc_user_guide/C0_userGuide.html
 */

import { Injectable } from '@angular/core';
import { IOwsContext, IOwsResource, IOwsOffering } from '@ukis/datatypes-owc-json';
import { ILayerGroupOptions, ILayerOptions, IRasterLayerOptions, VectorLayer, RasterLayer, IVectorLayerOptions } from '@ukis/datatypes-layers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OwcJsonService {

  constructor(
    private http: HttpClient
  ) {
    //http://www.owscontext.org/owc_user_guide/C0_userGuide.html#truegeojson-encoding-2
  }

  /** Context --------------------------------------------------- */
  getContextFromServer(url: string): Observable<IOwsContext> {
    return this.http.get(url).pipe(map((response: IOwsContext) => response));
  }


  checkContext(context: IOwsContext) {
    var isContect_1_0;
    if (!Array.isArray(context.properties.links)) {
      isContect_1_0 = context.properties.links.profiles.find(item => item == "http://www.opengis.net/spec/owc-geojson/1.0/req/core")
    } else {
      isContect_1_0 = context.properties.links.find(item => item.href == "http://www.opengis.net/spec/owc-geojson/1.0/req/core")
    }

    if (!isContect_1_0) {
      console.error('this is not a valid OWS Context v1.0!');

    }
    return isContect_1_0;
  }

  getContextTitle(context: IOwsContext) {
    return context.properties.title;
  }

  getContextPublisher(context: IOwsContext) {
    return (context.properties.publisher) ? context.properties.publisher : null;
  }

  getContextExtent(context: IOwsContext) {
    return (context.bbox) ? context.bbox : null; //or [-180, -90, 180, 90];
  }


  getResources(context: IOwsContext) {
    return context.features;
  }

  /** Resource --------------------------------------------------- */
  getResourceTitle(resource: IOwsResource) {
    return resource.properties.title;
  }

  getResourceUpdated(resource: IOwsResource) {
    return resource.properties.updated;
  }

  getResourceDate(resource: IOwsResource) {
    return (resource.properties.date) ? resource.properties.date : null;
  }

  getResourceOfferings(resource: IOwsResource) {
    return (resource.properties.offerings) ? resource.properties.offerings : null;
  }

  /**
   * retrieve layer status active / inactove based on IOwsResource
   * @param resource 
   */
  isActive(resource: IOwsResource) { 
    let active = true;
    if(resource.properties.hasOwnProperty("active")){      
      active = resource.properties.active;
    }
    return active;
  }

  //https://github.com/Terradue/ows-context-demo/blob/master/src/main/demo/index.html#L245:2
  //create ukis layers ----------------------------------------------------------------------
  layerGroupFromResource(resource: IOwsResource): ILayerGroupOptions {
    let layerGroupOptions: ILayerGroupOptions = {
      filtertype: 'Overlays',
      id: resource.id.toString(),
      name: resource.properties.title,
      removable: true,
      layerRemovable: false,
      layers: []
    };

    if (resource.properties.bbox) {
      layerGroupOptions.bbox = resource.properties.bbox;
    }

    return layerGroupOptions;
  }

  getlayersFromResource(resource: IOwsResource): ILayerOptions {
    let layers: ILayerOptions[] = [];
    let offerings = this.getResourceOfferings(resource);

    let layerOptions: ILayerOptions = {
      name: resource.properties.title,
      id: resource.id.toString(),
      visible: true,
      type: 'custom',
      removable: true,
      attribution: '',
      continuousWorld: false,
      opacity: 1
    }

    return layerOptions;
  }


  /** Offering --------------------------------------------------- */
  getOfferingCode(offering: IOwsOffering) {
    for (let entry of offering.code.split('/')) {
      if(["wms","wfs","wmts"].includes(entry.toLowerCase())) {
        return entry
      }
    }
  }

  checkIfServiceOffering(offering: IOwsOffering) {
    return (!offering.contents && offering.operations) ? true : false;
  }

  checkIfDataOffering(offering: IOwsOffering) {
    return (offering.contents && !offering.operations) ? true : false;
  }

  getOfferingContents(offering: IOwsOffering) {
    if (this.checkIfServiceOffering(offering)) {
      return offering.operations;
    } else if (this.checkIfDataOffering(offering)) {
      return offering.contents;
    }
  }

    /**
     * Helper function to extract legendURL from project specific ows Context
     * @param offering layer offering
     */
  getLegendUrl(offering: IOwsOffering) {
    let legendUrl = "";
    
    if (offering.hasOwnProperty("styles")) {
      let defaultStyle = offering.styles.filter(style => style.default);
      if(defaultStyle.length > 0){
        console.log(defaultStyle[0].legendURL);
        return defaultStyle[0].legendURL;
      } 
    } else if(offering.hasOwnProperty("customAttributes")){
      if (offering.customAttributes.legendUrl) {        
        legendUrl = offering.customAttributes.legendUrl;
      }
    }
    return legendUrl;
  }

   /**
    * retrieve iconUrl based on IOwsOffering
    * @param offering 
    */
  getIconUrl(offering: IOwsOffering) {
    let iconUrl = "";
    if(offering.hasOwnProperty("customAttributes")){
      if (offering.customAttributes.iconUrl) {        
        iconUrl = offering.customAttributes.iconUrl;
      }
    }
    return iconUrl;
  }


  createVectorLayerFromOffering(offering: IOwsOffering, resource: IOwsResource): VectorLayer {
    let iconUrl = this.getIconUrl(offering);
    let layerUrl = this.getUrlFromUri(offering.operations[0].href);
    let params = this.getJsonFromUri(offering.operations[0].href);
    let legendUrl = this.getLegendUrl(offering);
    
    let layerOptions: IVectorLayerOptions = {
      id: resource.id as string,
      name: this.getResourceTitle(resource),
      displayName: this.getDisplayName(offering, resource),
      visible: this.isActive(resource),
      type: 'geojson',
      removable: true,
      attribution: '&copy, <a href="//geoservice.dlr.de/eoc/basemap/">DLR</a>',
      continuousWorld: false,
      opacity: 1, 
      url: layerUrl ? layerUrl : null,
      legendImg: legendUrl ? legendUrl : null
    };


    let layer = new VectorLayer(layerOptions);

    if (resource.bbox) {
      layer.bbox = <[number, number, number, number]>resource.bbox;
    }
    
    return layer;
  }
  
  


  createRasterLayerFromOffering(offering: IOwsOffering, resource: IOwsResource): RasterLayer {
    //let iconUrl = this.getIconUrl(offering);
    let layerUrl = this.getUrlFromUri(offering.operations[0].href);
    let urlParams = this.getJsonFromUri(offering.operations[0].href);

    let layerOptions: IRasterLayerOptions = {
      id: resource.id as string,
      name: this.getResourceTitle(resource), 
      displayName: this.getDisplayName(offering, resource),
      visible: this.isActive(resource),
      type: 'wms',
      removable: true,
      params: {
        layers: urlParams['LAYERS'],
        format: urlParams['FORMAT'],
        time: urlParams['TIME'],
        version: urlParams['VERSION'],
        tiled: urlParams['TILED'],
        transparent: true
        
      },
      url: layerUrl,
      attribution: '&copy, <a href="dlr.de/eoc">DLR</a>',
      continuousWorld: false,
      legendImg: this.getLegendUrl(offering),
      opacity: 1
    }

    let layer: RasterLayer = new RasterLayer(layerOptions);
    
    if (resource.bbox) {
      layer.bbox = <[number, number, number, number]>resource.bbox;
    }

    return layer;
  }





  /** Misc --------------------------------------------------- */

  private getUrlFromUri(uri: string) {
    return uri.substring(0, uri.indexOf("?"));
  }

  /**
   * helper to pack query-parameters of a uri into a JSON
   * @param uri any uri with query-parameters
   */
  private getJsonFromUri(uri: string) {
    var query = uri.substr(uri.lastIndexOf("?") + 1);
    var result = {};
    query.split("&").forEach(function (part) {
      var item = part.split("=");
      result[item[0].toUpperCase()] = decodeURIComponent(item[1]);
    });
    return result;
  }


  /**
   * retrieve display name of layer, based on IOwsResource and IOwsOffering
   * @param offering 
   * @param resource 
   */
  private getDisplayName(offering: IOwsOffering, resource: IOwsResource) {
    let displayName = "";
    if(offering.hasOwnProperty("customAttributes")){
      if (offering.customAttributes.title) {        
        displayName = offering.customAttributes.title;
      } else { 
        displayName = this.getResourceTitle(resource);
      }
    }
    return displayName;
  }

}