function calcular(){
    let res = document.querySelector('div#res');

    //Coleta informação
    let n = Number(window.prompt("Qual o valor da sua carteira em reais?"));

    //Calcula e exibe
    let d = n/6;
    res.innerHTML = `<p>Sua carteira tem R$${n.toFixed(2)}. Com ela você pode comprar até U$${d.toFixed(2)}!</p>`;
}