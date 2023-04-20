// create map object
let map = L.map("map").setView([-23.22, -45.91], 13);

// add tileLayer to map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// fetch data and draw features from geoJSON
if (localStorage.getItem("map_json") === null) {
  console.log("going to fetch map data ..");

  fetch("./../data/geometrias_bairros.json")
    .then((r) => r.json())
    .then((json) => {
      localStorage.setItem("map_json", JSON.stringify(json));
      L.geoJSON(json).addTo(map);
    })
    .catch((rejected) => {
      console.log(rejected);
      let errorTag = document.getElementById('map_error')
      errorTag.style.display = 'flex'
    });
} else {
  console.log("map data already fetched");

  let map_json = JSON.parse(localStorage.getItem("map_json"));
  L.geoJSON(map_json).addTo(map);
}
