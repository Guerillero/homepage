/**
  * Created by tfish on 1/3/2017.
  * Updated by tfish on 7/17/2019.
***/

var chosenLocation = Math.floor((Math.random() * 100) + 1) % 9;
var chosenBasemap = Math.floor((Math.random() * 100) + 1) % 3;

var places = [
  [12, 38.892103, -77.036551, "Washington, DC Metro Area"],
  [20, 38.892103, -77.036551, "Washington, DC"],
  [14, 40.440637, -79.991701, "Pittsburgh, PA"],
  [14, 51.508410, -0.116701, "Greater London, UK"],
  [13, 39.207785, -76.060032, "Kent County, MD"],
  [10, 36.448757, -105.007299, "Philmont Scout Ranch, NM"],
  [12, -33.903981, 18.418113, "Cape Town, ZA"],
  [12, 25.076709, 55.137380, "Dubai, UAE"],
  [12, 40.020592, -79.224410, "Somerset County, PA"]
];

var bmaps = [
  ['https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', ' | Map tiles by <a href="http://stamen.com">Stamen Design</a>,  <a href="http://creativecommons.org/licenses/by/3.0"> CC BY 3.0 </a> &mdash; Map data &copy;  <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap </a>'],
  ['https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', ' | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'],
  ['https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png', ' | Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors']
]

var map = L.map('main-map', {
  minZoom: 5,
  zoom: places[chosenLocation][0],
  center: L.latLng(places[chosenLocation][1], places[chosenLocation][2]),
  zoomControl: false
});

L.tileLayer(bmaps[chosenBasemap][0], {
  attribution: 'View of ' + places[chosenLocation][3] + bmaps[chosenBasemap][1],
  minZoom: 1,
  maxZoom: 16
}).addTo(map);
