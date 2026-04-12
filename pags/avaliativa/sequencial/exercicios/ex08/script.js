function calcular(){
    let res = document.querySelector('div#res');

    //Coleta informação
    let n = Number(window.prompt("Quanto ficou a conta da mesa?"));

    //Calcula e exibe o resultado
    let g = n*0.1;
    let vg = n+g;
    res.innerHTML = `<p>O valor da gorjeta do garçom ficou R$${g.toFixed(2)}. Você deve pagar um total de R$${vg.toFixed(2)}.</p>`;
}v