import { gerarMatrizAleatoria } from "../util.js";

function calcular() {
  let res = document.querySelector("div#res");
  res.innerHTML = '';

  const matriz = gerarMatrizAleatoria(3, 4, 10);

  let tabelaHTML = `<table class="matriz-table">`;
  for (let i = 0; i < matriz.length; i++) {
    let somalinhas = 0;
    tabelaHTML += `<tr>`;
    for (let j = 0; j < matriz[i].length; j++) {
      somalinhas += matriz[i][j];
      tabelaHTML += `<td>${matriz[i][j]}</td>`;
    }
    tabelaHTML += `<td><strong>${somalinhas}</strong></td>`;
    tabelaHTML += `</tr>`;
  }
  tabelaHTML += `</table>`;
  res.innerHTML = tabelaHTML;
}

window.calcular = calcular;
