/**
  * Created by tfish on 1/3/2017.
  * Updated by tfish on 2/14/2025.
***/

var chosenLocation = Math.floor((Math.random() * 100) + 1) % 5;

var places = [
  [14, 38.892103, -77.036551, "Washington, DC, USA"],
  [13, 40.440637, -79.991701, "Pittsburgh, PA, USA"],
  [12, 55.6816, 12.594167, "Copenhagen, Denmark"],
  [14, 39.207785, -76.060032, "Chestertown, MD, USA"],
  [8, 35.1856, 33.3823, "Cyprus"],
];

var map = L.map('main-map', {
  minZoom: 5,
  zoom: places[chosenLocation][0],
  center: L.latLng(places[chosenLocation][1], places[chosenLocation][2]),
  zoomControl: false
});

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3VlcmlsbGVybyIsImEiOiJja2g2bmhuZDIwMG85MndybXo1OGE3OWhqIn0.wVTGMiNsncWf2pZrBkG9CQ', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  minZoom: 1,
  maxZoom: 16
}).addTo(map);

//outdoors-v12
//streets-v11
//'View of ' + places[chosenLocation][3] + 
