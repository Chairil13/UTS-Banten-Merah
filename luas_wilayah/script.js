mapboxgl.accessToken = "pk.eyJ1Ijoid29ya21naCIsImEiOiJjaWwxNzg3anMwMGFhd3VtNXVwamtiaHdqIn0.E2duI6-CFOk_9sY8lEOS8g";
/* eslint-disable */
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/satellite-v9", //hosted style id
  center: [-491.874, 42.76], // starting position
  zoom: 1, // starting zoom
});

var draw = new MapboxDraw({
  displayControlsDefault: false,
  controls: {
    polygon: true,
    trash: true,
  },
});
map.addControl(draw);

var calcButton = document.getElementById("calculate");
calcButton.onclick = function () {
  var data = draw.getAll();
  if (data.features.length > 0) {
    var area = turf.area(data);
    // restrict to area to 2 decimal points
    var rounded_area = Math.round(area * 100) / 100;
    var answer = document.getElementById("calculated-area");
    answer.innerHTML = "<p><strong>" + rounded_area + "</strong></p><p>square meters</p>";
  } else {
    alert("Gambar garis di peta menggunakan tools polygon di pojok kanan atas.");
  }
};
