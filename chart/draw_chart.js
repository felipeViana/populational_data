function drawChart(ctx, chart_json) {
  let years = ["2000", "2002", "2004", "2006"];
  let populations = {
    1: [],
    2: [],
    3: [],
    4: [],
  };
  let district_names = [
    "Jd. Colinas",
    "Jd. das Industrias",
    "Jd. Alvorada",
    "Pq. Res. Aquarius",
  ];

  chart_json.forEach((element) => {
    populations[element["id_geometria"]].push(element.populacao);
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: district_names["0"],
          data: populations["1"],
          borderWidth: 1,
        },
        {
          label: district_names["1"],
          data: populations["2"],
          borderWidth: 1,
        },
        {
          label: district_names["2"],
          data: populations["3"],
          borderWidth: 1,
        },
        {
          label: district_names["3"],
          data: populations["4"],
          borderWidth: 1,
        },
      ],
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

if (localStorage.getItem("chart_json") === null) {
  console.log("going to fetch chart data ..");

  fetch("./../data/populacao_bairros.json")
    .then((r) => r.json())
    .then((json) => {
      localStorage.setItem("chart_json", JSON.stringify(json));
      drawChart(ctx, json);
    });
} else {
  console.log("chart data already fetched");

  let chart_json = JSON.parse(localStorage.getItem("chart_json"));
  drawChart(ctx, chart_json);
}
