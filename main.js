/**
  * Created by tfish on 1/3/2017.
  * Updated by tfish on 7/17/2019.
***/

var chosenLocation = Math.floor((Math.random() * 100) + 1) % 4;
var chosenBasemap = Math.floor((Math.random() * 100) + 1) % 1;

var places = [
  [20, 38.892103, -77.036551, "Washington, DC, USA"],
  [14, 40.440637, -79.991701, "Pittsburgh, PA, USA"],
  [14, 55.6816, 12.594167, "Copenhagen, Denmark"],
  [13, 39.207785, -76.060032, "Chestertown, MD, USA"],
];

var map = L.map('main-map', {
  minZoom: 5,
  zoom: places[chosenLocation][0],
  center: L.latLng(places[chosenLocation][1], places[chosenLocation][2]),
  zoomControl: false
});

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
  attribution: 'View of ' + places[chosenLocation][3] + ' | Map tiles by <a href="http://stamen.com">Stamen Design</a>,  <a href="http://creativecommons.org/licenses/by/3.0"> CC BY 3.0 </a> &mdash; Map data &copy;  <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap </a>',
  minZoom: 1,
  maxZoom: 16
}).addTo(map);
