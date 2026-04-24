export function gerarMatrizAleatoria(linhas, colunas, multiplicador) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = Math.floor(Math.random() * multiplicador) + 1;
    }
  }
  return matriz;
}

export function gerarJogoDaVelha() {
  let linhaGanhadora = Math.floor(Math.random() * 3);
  let jogadorVencedor = Math.random() > 0.5 ? "X" : "O";

  const matriz = [];
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
      const valor = Math.floor(Math.random() * 3);

      if (linhaGanhadora === i) {
        matriz[i][j] = jogadorVencedor;
      } else {
        switch (valor) {
          case 0:
            matriz[i][j] = "X";
            break;

          case 1:
            matriz[i][j] = "O";
            break;

          case 2:
            matriz[i][j] = "";
            break;
        }
      }
    }
  }
  return matriz;
}
