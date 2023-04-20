function getDistrictNames() {
  // map_json is guaranteed to be in localStorage
  // because we fetch it before calling this method
  let map_json = JSON.parse(localStorage.getItem("map_json"));

  return map_json.features.map((feature) => {
    return feature.properties.name;
  });
}

function drawChart(ctx, chart_json) {
  let years = [];
  let district_names = getDistrictNames();

  let populations = {};
  chart_json.forEach((element) => {
    // using -1 to turn the index 0 based
    // since at json it comes on the form 1, 2, 3, ..
    let id = element["id_geometria"] - 1;

    if (!populations[id]) {
      populations[id] = [];
    }
    populations[id].push(element.populacao);

    // populate years array with available years from json
    if (!years.includes(element["ano"])) {
      years.push(element["ano"]);
    }
  });

  let values = [];
  for (let index = 0; index < Object.keys(populations).length; index++) {
    values.push({
      label: district_names[index],
      data: populations[index],
      borderWidth: 1,
    });
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: values,
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

const ctx = document.getElementById("myChart");

// fetch chart json
if (localStorage.getItem("chart_json") === null) {
  console.log("going to fetch chart data ..");

  fetch("./../data/populacao_bairros.json")
    .then((r) => r.json())
    .then((json) => {
      localStorage.setItem("chart_json", JSON.stringify(json));

      // fetch map json to get info about districts
      if (localStorage.getItem("map_json") === null) {
        console.log("going to fetch map data ..");

        fetch("./../data/geometrias_bairros.json")
          .then((r) => r.json())
          .then((json) => {
            localStorage.setItem("map_json", JSON.stringify(json));
          })
          .then(() => {
            drawChart(ctx, json);
          })
          .catch((rejected) => {
            console.log(rejected);
            let errorTag = document.getElementById("chart_error");
            errorTag.style.display = "flex";
          });
      } else {
        console.log("map data already fetched");
        drawChart(ctx, json);
      }
    })
    .catch((rejected) => {
      console.log(rejected);
      let errorTag = document.getElementById("chart_error");
      errorTag.style.display = "flex";
    });
  // TODO: handle fetch error
} else {
  console.log("chart data already fetched");

  let chart_json = JSON.parse(localStorage.getItem("chart_json"));
  drawChart(ctx, chart_json);
}
