/**
 * Created by tfish on 1/3/2017.
 */

var chosen = Math.floor((Math.random() * 100) + 1) % 5;

var places = [
  [12, 38.892103, -77.036551, "Washington, DC"],
  [20, 38.892103, -77.036551, "Washington, DC"],
  [14, 40.440637, -79.991701, "Pittsburgh, PA"],
  [13, 51.494497, -0.123372, "Greater London, UK"],
  [13, 39.207785, -76.060032, "Kent County, MD"],
  [10, 36.448757, -105.007299, "Philmont Scout Ranch, NM"]
];

var map = L.map('main-map', {
  minZoom: 5,
  zoom: places[chosen][0],
  center: L.latLng(places[chosen][1], places[chosen][2]),
  zoomControl: false
});

L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
  attribution: 'View of ' + places[chosen][3] + ' | Map tiles by <a href="http://stamen.com">Stamen Design</a>,  <a href="http://creativecommons.org/licenses/by/3.0"> CC BY 3.0 </a> &mdash; Map data &copy;  <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap </a>',
  minZoom: 1,
  maxZoom: 16
}).addTo(map);
