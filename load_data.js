// let geometrias_bairros;

// fetch("./data/geometrias_bairros.json")
//   .then((r) => r.json())
//   .then((json) => {
//     window.geometrias_bairros = json;
//     console.log(window.geometrias_bairros);
//   });

window.geometrias_bairros = await fetch("./data/geometrias_bairros.json")
  .then((r) => r.json())
  .then((json) => {
    return json;
    // console.log(window.geometrias_bairros);
  });
