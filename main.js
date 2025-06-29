/**
 * Created by tfish on 6/29/2025
 ***/

var map = L.map("main-map", {
  maxZoom: 10,
  zoom: 10,
  center: L.latLng(0, 0),
  //zoomControl: false,
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3VlcmlsbGVybyIsImEiOiJja2g2bmhuZDIwMG85MndybXo1OGE3OWhqIn0.wVTGMiNsncWf2pZrBkG9CQ",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 1,
    maxZoom: 16,
  }
).addTo(map);

livedjson = [
  {
    type: "Feature",
    properties: {
      name: "Latrobe, PA",
      popupContent: "1993-2011",
    },
    geometry: {
      type: "Point",
      coordinates: [-79.377, 40.279],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Chestertown, MD",
      popupContent: "2011-2017",
    },
    geometry: {
      type: "Point",
      coordinates: [-76.067, 39.219],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Chevy Chase, MD",
      popupContent: "2017-2020",
    },
    geometry: {
      type: "Point",
      coordinates: [-77.088, 38.963],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Arlington, VA",
      popupContent: "2020-2021",
    },
    geometry: {
      type: "Point",
      coordinates: [-77.074, 38.896],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Copenhagen, Denmark",
      popupContent: "2021-2024",
    },
    geometry: {
      type: "Point",
      coordinates: [12.582, 55.694],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Nicosia, Cyprus",
      popupContent: "2024-Present",
    },
    geometry: {
      type: "Point",
      coordinates: [33.342, 35.166],
    },
  },
];

lived = L.geoJSON(livedjson);

lived
  .bindPopup(function (layer) {
    return (
      layer.feature.properties.name +
      ": " +
      layer.feature.properties.popupContent
    );
  })
  .addTo(map);

map.fitBounds(lived.getBounds());
