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

export function gerarJogoDaVelhaSimples() {
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

export function gerarJogoDaVelhaCompleto() {

  //Mapeando as combinações e construindo a matriz
  const combincoes = [
    [[0, 0], [0, 1], [0, 2]], // linha 0
    [[1, 0], [1, 1], [1, 2]], // linha 1
    [[2, 0], [2, 1], [2, 2]], // linha 2
    [[0, 0], [1, 0], [2, 0]], // coluna 0
    [[0, 1], [1, 1], [2, 1]], // coluna 1
    [[0, 2], [1, 2], [2, 2]], // coluna 2
    [[0, 0], [1, 1], [2, 2]], // diagonal principal
    [[2, 0], [1, 1], [0, 2]] // diagonal secundaria
  ];

  const matriz = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
  ];

  //Escrevendo o vencedor
  const formaVencedora = Math.floor(Math.random() * 8);
  const jogadorVencedor = Math.random() > 0.5 ? "X" : "O";
  
  const coordenadasVencedoras = combincoes[formaVencedora];
  coordenadasVencedoras.forEach(([l, c]) => {
    matriz[l][c] = jogadorVencedor;
  });

  //Preenchendo ruido
  let disponiveis = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matriz[i][j] === ""){
       disponiveis.push([i, j])
      }
    }
  }

  disponiveis.sort(() => Math.random() - 0.5)

  const jogadorPerdedor = jogadorVencedor === "X" ? "O" : "X";

  const [lV, cV] = disponiveis.pop();
  matriz [lV][cV] = jogadorVencedor;

  for (let k = 0; k < 3; k++){
    if (disponiveis.length > 0){
      const [lP, cP] = disponiveis.pop();
      matriz [lP][cP] = jogadorPerdedor
    }
  }
  return matriz;
}
