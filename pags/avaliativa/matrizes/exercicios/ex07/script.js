import { gerarMatrizAleatoria } from "../util.js"; 

function calcular() { 
    let res = document.querySelector("div#res"); 
    res.innerHTML = ""; 

    const n = Number(window.prompt("Informe a dimensão da sua matriz")); 
    if (!n || n <= 0) return;

    let matriz = []; 
    let tabelaHTML = `<table class="matriz-table">`; 

    for (let i = 0; i < n; i++) { 
        matriz[i] = []; 
        tabelaHTML += `<tr>`; 

        for (let j = 0; j < n; j++) { 
            if (i === j) { 
                matriz[i][j] = 1; 
            } else { 
                matriz[i][j] = 0; 
            } 
            tabelaHTML += `<td>${matriz[i][j]}</td>`; 
        } 
        tabelaHTML += `</tr>`; 
    } 

    tabelaHTML += `</table>`; 
    res.innerHTML = tabelaHTML; 
} 

window.calcular = calcular;
