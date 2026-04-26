import { gerarMatrizAleatoria } from "../util.js";

function calculo() {
  let res = document.querySelector("div#res");
  res.innerHTML = ``;

  const matriz = [
    [1, 2, 3],
    [4, 4, 6],
    [7, 8, 9],
  ];

  let tabelaHTML = `<table class="matriz-table">`;

  for (let i = 0; i < matriz.length; i++) {
    tabelaHTML += `<tr>`;

    for (let j = 0; j < matriz[i].length; j++) {
      tabelaHTML += `<td> ${matriz[i][j]}</td>`;
    }

    tabelaHTML += `</tr>`;
  }

  tabelaHTML += `</table>`;
  res.innerHTML += tabelaHTML;
}

window.calculo = calculo;
