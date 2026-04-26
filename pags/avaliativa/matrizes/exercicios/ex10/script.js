function calcular() {
  res.innerHTML = ``;

  const matriz = [
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
    ["Livre", "Livre", "Livre", "Livre", "Livre"],
  ];

  while (true) {
    let l = Number(window.prompt("Linha (1-5). Zero ou negativo para sair:"));
    if (l <= 0) {
      alert("Programa finalizado!");
      break;
    }
    if (l > 5) {
      alert("Posição inválida! Escolha de 1 a 5.");
      continue;
    }

    let c = Number(window.prompt("Coluna (1-5). Zero ou negativo para sair:"));
    if (c <= 0) {
      alert("Programa finalizado!");
      break;
    }
    if (c > 5) {
      alert("Posição inválida! Escolha de 1 a 5.");
      continue;
    }

    l -= 1;
    c -= 1;

    if (matriz[l][c] === "Livre") {
      matriz[l][c] = "Reservada";
      alert("Reserva realizada com sucesso!");
    } else {
      alert("Poltrona já está ocupada!");
    }
  }
  exibirMatriz(matriz);
}

function exibirMatriz(matriz) {
  let res = document.querySelector("div#res");
  let tabelaHTML = `<table class="poltrona-table">`;

  for (let i = 0; i < matriz.length; i++) {
    tabelaHTML += `<tr>`;
    for (let j = 0; j < matriz[i].length; j++) {
      let classe = matriz[i][j] === "Reservada" ? "poltrona-reservada" : "poltrona-livre";
      tabelaHTML += `<td class="${classe}">${matriz[i][j]}<br> <span style="font-size:0.6rem; opacity:0.6">${i},${j}</span></td>`;
    }
    tabelaHTML += `</tr>`;
  }

  tabelaHTML += `</table>`;
  res.innerHTML += tabelaHTML;
}
