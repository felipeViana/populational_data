const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2000", "2002", "2004", "2006"],
    datasets: [
      {
        label: "Jd. Colinas",
        data: [11567, 12345, 13450, 13550],
        borderWidth: 1,
      },
      {
        label: "Jd. das Industrias",
        data: [17594, 18998, 21765, 20210],
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
