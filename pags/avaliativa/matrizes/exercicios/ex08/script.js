import { gerarJogoDaVelhaCompleto, gerarJogoDaVelhaSimples } from "../util.js";

function jogoSimples() {
  let res = document.querySelector("div#res");
  res.innerHTML = "";

  const tabuleiro = gerarJogoDaVelhaSimples();
  let vencedor = "ninguém";
  let tabelaHTML = `<table class="matriz-table">`;
  for (let i = 0; i < tabuleiro.length; i++) {
    tabelaHTML += `<tr>`;
    const ehVencedor = (tabuleiro[i][0] != "" && tabuleiro[i][1] === tabuleiro[i][0] && tabuleiro[i][2] === tabuleiro[i][1]);

    for (let j = 0; j < tabuleiro[i].length; j++) {
      if (ehVencedor == true) {
        tabelaHTML += `<td><strong style="color: green;">${tabuleiro[i][j]}</strong></td>`;
        vencedor = tabuleiro[i][0];
      } else {
        tabelaHTML += `<td>${tabuleiro[i][j]}</td>`;
      }
    }

    tabelaHTML += `</tr>`;
  }
  tabelaHTML += `</table>`;
  res.innerHTML = tabelaHTML;
  res.innerHTML += `<p class="resultado-texto">O jogador <strong>${vencedor}</strong> venceu!</p>`;
}

window.jogoSimples = jogoSimples;

function jogoCompleto() {
  let res = document.querySelector("div#res");
  res.innerHTML = "";

  const tabuleiro = gerarJogoDaVelhaCompleto();
  let vencedor = "ninguém";

  let tabelaHTML = `<table class="matriz-table">`;
  for (let i = 0; i < 3; i++) {
    tabelaHTML += `<tr>`;
    for (let j = 0; j < 3; j++) {
      const ehLinha = (tabuleiro[i][0] !== "" && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]);
      const ehColuna = (tabuleiro[0][j] !== "" && tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j]);
      const ehDiag1 = (tabuleiro[0][0] !== "" && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && i === j);
      const ehDiag2 = (tabuleiro[0][2] !== "" && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && (i + j === 2));

      if (ehLinha || ehColuna || ehDiag1 || ehDiag2) {
        tabelaHTML += `<td><strong>${tabuleiro[i][j]}</strong></td>`;
        vencedor = tabuleiro[i][j];
      } else {
        tabelaHTML += `<td>${tabuleiro[i][j]}</td>`;
      }
    }
     tabelaHTML += `</tr>`;
  }

  tabelaHTML += `</table>`;
  res.innerHTML = tabelaHTML;
  res.innerHTML += `<p class="resultado-texto">O jogador <strong>${vencedor}</strong> venceu!</p>`;
}

window.jogoCompleto = jogoCompleto;
