import { gerarMatrizAleatoria } from "../util.js";

function calculo() {
  let res = document.querySelector("div#res");
  res.innerHTML = "";
  let soma = 0;

  const matriz = gerarMatrizAleatoria(4,4,10);

  let tabelaHTML = `<table class="matriz-table">`;

  for (let i = 0; i < matriz.length; i++) {
    tabelaHTML += `<tr>`;
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
      tabelaHTML += `<td> ${matriz[i][j]}</td>`;
    }
    tabelaHTML += `</tr>`;
  }
  tabelaHTML += `</table>`;

  res.innerHTML += tabelaHTML;
  res.innerHTML += `<p class="resultado-texto">Soma = <strong>${soma}</strong></p>`;
}

window.calculo = calculo;
