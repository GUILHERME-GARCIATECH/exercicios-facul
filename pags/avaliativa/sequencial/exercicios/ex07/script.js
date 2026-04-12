function calcular(){
    let res = document.querySelector('div#res');

    //Coleta Informação
    let v = Number(window.prompt("Qual o valor do produto?"));

    //Calcula e exibe o resultado
    let d = v*0.15;
    let vd = v-d;
    res.innerHTML = `<p>O valor do seu produto era R$${v.toFixed(2)}.</p>
    <p> Com o desonto de 15%(R$${d.toFixed(2)}) passou para R$${vd.toFixed(2)}.</p>`;
}