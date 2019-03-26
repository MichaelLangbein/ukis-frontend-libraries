import { Component, Input, Inject, OnChanges, OnDestroy, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

import { IOwsContext, IOwsResource } from '@ukis/datatypes-owc-json';
import { Layer } from '@ukis/datatypes-layers';

import { DatasetExplorerService } from "./dataset-explorer.service";
import { LayersService } from '@ukis/services-layers';
import { MapStateService } from '@ukis/services-map-state';

import { Subscription } from 'rxjs';

export interface ColumnDescriptor {
  title: string,
  type?: string,
  prop?: string | { href: string, title: string, status: string },
  bind?: Boolean,
  hidden?: Boolean
}

export interface DataGridDescriptor {
  rowclass?: string,
  rowdetail?: string,
  columns: ColumnDescriptor[]
}

const clone = function (o) {
  return JSON.parse(JSON.stringify(o))
}


@Component({
  selector: 'ukis-dataset-explorer',
  templateUrl: './dataset-explorer.component.html',
  styleUrls: ["./dataset-explorer.scss"],
  host: {
    "[class.dataset-explorer]": "true"
  }
})
export class DatasetExplorerComponent implements OnInit, OnChanges, OnDestroy {
  @Input('layers-svc') layersSvc: LayersService;
  @Input('map-state-svc') mapStateSvc: MapStateService;
  @Input('ows-context') owsContext: IOwsContext;

  @Input('bbox-filter') bboxfilter?: (value: IOwsResource, index: number, array: IOwsResource[]) => any;
  @Input('table-props') tableProps?: { rowdetail: string, rowclass: string, columns: ColumnDescriptor[] };
  @Input('filter-props') filterProps?: any[];
  @Input('is-active') isactive?: boolean;

  @ViewChild('treeroot') treeroot;



  datasets: IOwsResource[];
  datasetsFiltered: IOwsResource[] = [];
  datasetSelected: IOwsResource[] = [];
  selectedMap: Map<string, IOwsResource> = new Map();

  mapLayers: Layer[] = [];
  //layerIDs: string[] = [];

  oldIds: string[] = [];

  filters: any[];
  filtersFiltered: any[];
  filterSelected: boolean = false;

  columns: ColumnDescriptor[] = [];
  layersSubscription: Subscription;
  imagesForDatatypes: any;

  //mock-up
  filterMapExtend: boolean = false;
  filterTimeRange: boolean = false;

  constructor(@Inject(DatasetExplorerService) private obsSvc: DatasetExplorerService) {
    //this.filterOnBbox = false;
  }

  ngOnInit() {
    this.imagesForDatatypes = {
      "raster": "/assets/icons/raster.png",
      "point": "/assets/icons/point.png",
      "line": "/assets/icons/line.png",
      "polygon": "/assets/icons/polygon.png",
      "literature": "/assets/icons/literature.png",
      "statistics": "/assets/icons/statistics.png"
    }

    this.subscribeToLayerSvc();
  }

  ngOnChanges(changes) {
    if (changes.owsContext) {


      this.datasets = this.owsContext.features;

      this.columns = this.tableProps.columns;

      // rename property to "children" in the root 
      this.filters = this.filterProps.map(f => { f.children = this.owsContext.properties[f.prop]; return f });
      // work only on the clone and keep original data unmodified
      this.filtersFiltered = clone(this.filters);

      this.applyFilters();
    }

    if (changes.isactive) {
      //console.log('modal open', changes.isactive, this.mapLayers)
      this.getDatasetsForLayers(this.mapLayers)
      //console.log(this.datasetSelected)
    }
  }

  /*
  * not used due to clarity issue 2342
  saveSelections() {
    if (this.datasetSelected.length != 0) {
      this.datasetSelected.forEach((d) => {
        let key = d.id.toString();
        if (!this.selectedMap.has(key)) {
          this.selectedMap.set(key, d);
        }
      })
    }
  }

  restoreSelections() {
    if (this.selectedMap.size > 0) {
      this.datasetSelected = Array.from(this.selectedMap.values())
    }
  }
  */

  filterAdd(node, i) {
    /**
     * save selected Array - clarity issue 2342 Datagrid clears the selection on filter or source change
     */
    //this.saveSelections(); * not used due to clarity issue 2342

    this.filtersFiltered[i].selected = node;
    this.filtersFiltered[i].children = node.children;
    this.applyFilters();
  }

  filterRemove(i) {
    this.filtersFiltered[i].selected = null;
    this.filtersFiltered[i].children = clone(this.filters[i].children);
    this.applyFilters();

    /**
     * restore selected Array - clarity issue 2342 Datagrid clears the selection on filter or source change
     */
    //this.restoreSelections() * not used due to clarity issue 2342
    this.getDatasetsForLayers(this.mapLayers)
  }

  applyFilters() {

    // flatten to a simple array of filterterms
    var filterterms = this.filtersFiltered.reduce((acc, val) => {
      if (val.selected) acc.push(val.selected.id);
      return acc;
    }, []);

    if (filterterms.length) { // filter the datasets
      this.datasetsFiltered = this.datasets.filter(d =>
        filterterms.reduce((re, ft) => re && d.properties.customAttributes.categoryIds.indexOf(ft) != -1, true)
      );
    } else { // if there are no filterterms reseed the datasets in the table
      this.datasetsFiltered = this.datasets;
    }

    // get a count of available datasets for each term
    let count = {};
    this.datasetsFiltered.forEach((d) => {
      d.properties.customAttributes.categoryIds.forEach((t) => count[t] = count[t] ? count[t] + 1 : 1);
    });

    //console.log(count);
    // add the count as a property to each of the current active filterterms 
    this.filtersFiltered.forEach((fd) => {
      fd.children.forEach((c) => {
        // c.id is the property in the ows context theme / dataType lookup table
        c.count = count[c.id];
      })
    });
  }

  getLayerFromDatasets(layer: Layer) {
    return this.datasets.filter(d => d.id == layer.id)[0];
  }

  getDatasetsForLayers(layers: Layer[]) {
    layers.forEach((l) => {
      let d = this.getLayerFromDatasets(l);
      if (d && this.datasetSelected.indexOf(d) == -1) {
        this.datasetSelected.push(d)
      }
    })
  }

  //TODO fix subsribe remove 
  subscribeToLayerSvc() {
    this.layersSubscription = this.layersSvc.getOverlays().subscribe(layers => {
      this.mapLayers = layers;

      //this.layerIDs = this.mapLayers.map(l => l.id + "")
      //console.log('sub to layers', this.mapLayers)
      //console.log('oldIds', this.oldIds)
      //console.log('layerIDs', this.layerIDs)

      //remove old layers
      // reverse loop for remove items from Array while iterating over it
      /*
      * not used due to clarity issue 2342
      *
      for (let i = this.oldIds.length - 1; i >= 0; --i) {
        let id = this.oldIds[i]
        if (this.layerIDs.indexOf(id) == -1) {
          let _spliceindex;
          for (let _i = this.datasetSelected.length - 1; _i >= 0; --_i) {
            let d = this.datasetSelected[_i]
            if (d.id == id) {
              _spliceindex = _i
              this.datasetSelected.splice(_spliceindex, 1)
              this.oldIds.splice(i, 1)
            }
          }
        }
      }
      */
    });
  }

  selectionChanged(sel) {

    //console.log('-----------change')
    //console.log("datasets selected after selectionChanged: ", this.datasetSelected, this.selectedMap)
    //let newIds = []; * not used due to clarity issue 2342

    //console.log('newIds', newIds)
    //console.log('oldIds', this.oldIds)
    sel.forEach(s => {
      //newIds.push(s.id) * not used due to clarity issue 2342
      this.addDataset(s);
    })


    //remove old layers
    /*
    * * not used due to clarity issue 2342
    this.oldIds.forEach(id => {
      if (newIds.indexOf(id) == -1) {
        console.log('this.oldIds', this.oldIds, newIds)
        // we can not remove layers on selectionChanged due to clarity issue 2342 -> selectionChanged is triggered from datagrid if data or filter changes
        //http://git.ukis.eoc.dlr.de/projects/MOFRO/repos/frontend-libraries/commits/874bd84dadbde8afffa5ca79e2482eb092b24481#projects/dataset-explorer/src/lib/dataset-explorer.component.ts
         
        this.layersSvc.removeLayerOrGroupById(id);
      }
    });
    */

    //set old to new
    //this.oldIds = newIds; * not used due to clarity issue 2342

    /*
    * not used due to clarity issue 2342
    if (newIds.length == 0) {
      this.oldIds.forEach(id => {
        console.log('this.oldIds',this.oldIds)
        this.layersSvc.removeLayerOrGroupById(id);
      })
    }
    */

    //console.log('newIds', newIds)
    //console.log('oldIds', this.oldIds)
  }

  addDataset(dataset) {
    let layer = this.obsSvc.addObservation(dataset);
    layer.visible = true;
    //console.log(">", layer, dataset)

    this.layersSvc.addLayer(layer, 'Overlays');

    //zoomTo added dataset    
    if (this.mapStateSvc && layer.bbox && layer.bbox.length >= 4) {
      this.mapStateSvc.setExtent(layer.bbox);
    } else {
      //console.info("MapStateService: " + this.mapStateSvc + " && layer.bbox:" + layer.bbox + " && (layer.bbox.length >= 4):" + (layer.bbox.length >= 4) + ": zoom to layer cannot be conducted due to missing input");
    }
  }
  removeDataset(dataset) {
    //this.obsSvc.removeDataset(dataset);
    console.log("remove <", dataset.id)
    this.layersSvc.removeLayer(dataset, 'Overlays');
  }

  customFilter(active: boolean) {
    if (this.bboxfilter) {
      if (active) {
        this.datasetsFiltered = this.datasets.filter(this.bboxfilter)
      } else {
        this.datasetsFiltered = this.datasets;
      }
    }
  }

  pick(o: any, s: string) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }


  convertToDate(s: string) {
    return new Date(s);
  }

  ngOnDestroy() {
    this.layersSubscription.unsubscribe();
  }

}
