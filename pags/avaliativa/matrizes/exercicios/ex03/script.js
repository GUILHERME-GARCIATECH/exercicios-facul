import { gerarMatrizAleatoria } from "../util.js";

function calcular() {
    let res = document.querySelector('div#res');
    res.innerHTML = ''; 

    const matriz = gerarMatrizAleatoria(4,4,100)

    let maiorValor = matriz[0][0];
    
    let tabelaHTML = '<table class="matriz-table">';

    for (let i = 0; i < matriz.length; i++) {
        tabelaHTML += '<tr>';
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maiorValor) {
                maiorValor = matriz[i][j];
            }
            tabelaHTML += `<td>${matriz[i][j]}</td>`;
        }
        tabelaHTML += '</tr>';
    }
    tabelaHTML += '</table>';

    res.innerHTML = tabelaHTML;
    res.innerHTML += `<p class="resultado-texto">O maior valor gerado foi: <strong>${maiorValor}</strong></p>`;
}

window.calcular = calcular;
