import { gerarMatrizAleatoria } from "../util.js";

function calcular() {
  let res = document.querySelector("div#res");
  res.innerHTML = "";

  const matriz = gerarMatrizAleatoria(4, 4, 10);

  let tabelaHTML = `<table class="matriz-table">`;
  for (let i = 0; i < matriz.length; i++) {
    tabelaHTML += `<tr>`;
    for (let j = 0; j < matriz[i].length; j++) {
      if (i === j) {
        tabelaHTML += `<td><strong>${matriz[i][j]}</strong></td>`;
      } else {
        tabelaHTML += `<td>${matriz[i][j]}</td>`;
      }
    }
    tabelaHTML += `</tr>`;
  }
  tabelaHTML += `</table>`;
  res.innerHTML = tabelaHTML;
}
window.calcular = calcular;
