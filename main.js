mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlsYW5jIiwiYSI6Im53UGgtaVEifQ.RJiPqXwEtCLTLl-Vmd1GWQ";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/dylanc/ckh0w3px203ss19maxjyg36gp", // style URL
  center: [-107.987, 35], // starting position [lng, lat]
  zoom: 6, // starting zoom
  pitch: 60,
  bearing: -23,
  minZoom: 4.75,
  maxBounds: [
    [-137, 27],
    [-80, 51]
  ], //Southwest & Northeast Bounds
});
