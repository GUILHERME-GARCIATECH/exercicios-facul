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
