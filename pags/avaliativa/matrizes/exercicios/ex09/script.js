import { gerarMatrizAleatoria } from "../util.js";

function calcular() {
  let res = document.querySelector("div#res");
  res.innerHTML = "";

  const matriz = gerarMatrizAleatoria(2, 3, 10);
  const matrizTransposta = [];

  //Exibe e transpõe a tabela original
  let tabelaTrans = `<table class="matriz-table">`;
  for (let i = 0; i < matriz[0].length; i++) {
    matrizTransposta[i] = [];
    tabelaTrans += `<tr>`;
    for (let j = 0; j < matriz.length; j++) {
      matrizTransposta[i][j] = matriz[j][i];

      tabelaTrans += `<td>${matrizTransposta[i][j]}</td>`;
    }
    tabelaTrans += `</tr>`;
  }
  tabelaTrans += `</table>`;

  //exibe a tabela original
  let tabelaOrg = `<table class="matriz-table">`;
  for (let i = 0; i < matriz.length; i++) {
    tabelaOrg += `<tr>`;
    for (let j = 0; j < matriz[i].length; j++) {
      tabelaOrg += `<td>${matriz[i][j]}</td>`;
    }
    tabelaOrg += `</tr>`;
  }

  tabelaOrg += `</table>`;
  res.innerHTML += `<p>Tabela original:</p>`;
  res.innerHTML += tabelaOrg;

  res.innerHTML += `<p>Tabela transposta:</p>`;
  res.innerHTML += tabelaTrans;
}

window.calcular = calcular;
