import { gerarJogoDaVelha } from "../util.js";

function calcular() {
  let res = document.querySelector("div#res");
  res.innerHTML = "";

  const tabuleiro = gerarJogoDaVelha();
  let vencedor = "ninguém";
  let tabelaHTML = `<table class="matriz-table">`;
  for (let i = 0; i < tabuleiro.length; i++) {
    tabelaHTML += `<tr>`;
    if (
      tabuleiro[i][0] != "" &&
      tabuleiro[i][1] === tabuleiro[i][0] &&
      tabuleiro[i][2] === tabuleiro[i][1]
    ) {
      vencedor = tabuleiro[i][0];
      for (let j = 0; j < tabuleiro[i].length; j++) {
        tabelaHTML += `<td><strong>${tabuleiro[i][j]}</strong></td>`;
      }
    } else {
      for (let j = 0; j < tabuleiro[i].length; j++) {
        tabelaHTML += `<td>${tabuleiro[i][j]}</td>`;
      }
    }

    tabelaHTML += `</tr>`;
  }
  tabelaHTML += `</table>`;
  res.innerHTML = tabelaHTML;
  res.innerHTML += `<p class="resultado-texto">O jogador <strong>${vencedor}</strong> venceu!</p>`;
}

window.calcular = calcular;
