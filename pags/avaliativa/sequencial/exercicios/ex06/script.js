function calcular(){
    let res = document.querySelector('div#res');

    //Coleta Informação
    let c = Number(window.prompt("Informe sua temperatura em celsius."))

    //Calcula e exibe o resultado
    let f = (c*9/5) + 32;
    res.innerHTML = `<p>Sua temperatura em graus fahrenheit é ${f}.</p>`;
}