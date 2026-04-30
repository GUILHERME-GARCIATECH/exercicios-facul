res = document.getElementById('res');
let tabuleiro = [
    ["", "", ""], // Linha 0
    ["", "", ""], // Linha 1
    ["", "", ""]  // Linha 2
]

let jogadorAtual = Math.random() > 0.5 ? "X": "O";
document.getElementById('mensagem').innerText = "Vez do jogador: " + jogadorAtual;

function fazerJogada(l, c){

    if (tabuleiro[l][c] != "") {
        alert('Posição ocupada!');
        return;
    }

    tabuleiro[l][c] =jogadorAtual;

    atualizarTela();
    verificarVitoria();

    jogadorAtual = jogadorAtual === "X" ? "O": "X";

    document.getElementById('mensagem').innerText = "Vez do jogador: " + jogadorAtual;
    console.log(tabuleiro);
}

function atualizarTela(){

    const celulas = document.getElementsByClassName('celula');
    let i = 0;

    for (let l = 0; l < tabuleiro.length; l++){
        for(let c = 0; c < tabuleiro[l].length; c++){
            celulas[i].innerText = tabuleiro[l][c];
            i++;
        }
    }
}

function verificarVitoria(){
    let vencedor = '';

    for(let i = 0; i < tabuleiro.length; i++){
        for (let j = 0; j <tabuleiro[i].length; j++){
             const ehLinha = (tabuleiro[i][0] != "" && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]);
             const ehColuna = (tabuleiro[0][j] != "" && tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j]);
             const ehDiag1 = (tabuleiro[0][0] != "" && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && i === j);
             const ehDiag2 = (tabuleiro[0][2] != "" && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[0][2] &&( i + j === 2));

             if (ehLinha || ehColuna || ehDiag1 || ehDiag2){
                vencedor = tabuleiro[i][j];
             }
        }

        res.innerHTML = `<p>O ${vencedor} venceu a partida!</p>`
    }
}