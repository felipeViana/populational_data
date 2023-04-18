var map = L.map("map").setView([-23.2, -45.9], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// let map_json;

// if(localStorage.getItem("top10Scorers") === null){
//   // its not set, set it
// }

if (localStorage.getItem("map_json") === null) {
  console.log("going to fetch data ..");
  fetch("./../data/geometrias_bairros.json")
    .then((r) => r.json())
    .then((json) => {
      localStorage.setItem("map_json", JSON.stringify(json));

      json.features.forEach((district) => {
        let originalCoordinates = district.geometry.coordinates[0][0];

        let invertedCoordinates = [];
        originalCoordinates.forEach((coordinate) => {
          invertedCoordinates.push([coordinate[1], coordinate[0]]);
        });

        let polygon = L.polygon(invertedCoordinates).addTo(map);

        let districtInfo = district.properties;

        polygon.bindPopup(
          districtInfo.name +
            ", setor: " +
            districtInfo.setor +
            ", zona: " +
            districtInfo.zona
        );
      });
    });
} else {
  console.log("data already fetched");
  let map_json = JSON.parse(localStorage.getItem("map_json"));

  map_json.features.forEach((district) => {
    let originalCoordinates = district.geometry.coordinates[0][0];

    let invertedCoordinates = [];
    originalCoordinates.forEach((coordinate) => {
      invertedCoordinates.push([coordinate[1], coordinate[0]]);
    });

    let polygon = L.polygon(invertedCoordinates).addTo(map);

    let districtInfo = district.properties;

    polygon.bindPopup(
      districtInfo.name +
        ", setor: " +
        districtInfo.setor +
        ", zona: " +
        districtInfo.zona
    );
  });
}
