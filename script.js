require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/CSVLayer",
  "esri/Graphic",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/renderers/SimpleRenderer",
  "dojo/domReady!"
], function(Map, MapView, CSVLayer, Graphic, SimpleMarkerSymbol, SimpleRenderer) {
  var map = new Map({
    basemap: "streets"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 12, 
    center: [-90.1994, 38.6290] // St. Louis coordinates
  });

  var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

  var renderer = {
    type: "heatmap",
    colorStops: [
      { color: "rgba(255, 255, 255, 0)", ratio: 0 },
      { color: "rgba(255, 140, 0, 1)", ratio: 0.2 },
      { color: "rgba(255, 0, 0, 1)", ratio: 0.5 },
      { color: "rgba(255, 0, 255, 1)", ratio: 0.8 },
      { color: "rgba(0, 0, 220, 1)", ratio: 1 }
    ],
    minPixelIntensity: 0,
    maxPixelIntensity: 100
  };

  var layer = new CSVLayer({
    url: url,
    renderer: renderer,
    popupTemplate: {
      title: "Crime Report",
      content: "{*}" 
    }
  });

  map.add(layer);
});
