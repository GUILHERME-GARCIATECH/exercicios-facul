import { gerarMatrizAleatoria } from "../util.js";

function calcular() {
  let res = document.querySelector("div#res");
  res.innerHTML = "";

  const n = Number(window.prompt("Informe o multiplicador da matriz"));
  const matriz = gerarMatrizAleatoria(2, 2, 10);

  const matrizMultiplicada = [];

  let tabelaMul = `<table class="matriz-table">`;
  let tabelaOrg = `<table class="matriz-table">`;

  for (let i = 0; i < matriz.length; i++) {
    tabelaMul += `<tr>`;
    tabelaOrg += `<tr>`;

    matrizMultiplicada.push([]);

    for (let j = 0; j < matriz[i].length; j++) {
      matrizMultiplicada[i][j] = matriz[i][j] * n;

      tabelaMul += `<td>${matrizMultiplicada[i][j]}</td>`;
      tabelaOrg += `<td>${matriz[i][j]}</td>`;

    }

    tabelaMul += `</tr>`;
    tabelaOrg += `</tr>`;
  }

  tabelaMul += `</table>`;
  tabelaOrg += `</table>`;

  res.innerHTML += `<p>Tabela original</p>`;
  res.innerHTML += tabelaOrg;

  res.innerHTML += `<p>Tabela multiplicada</p>`;
  res.innerHTML += tabelaMul;
}

window.calcular = calcular;
