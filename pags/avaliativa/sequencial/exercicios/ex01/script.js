function calcular(){
    let res = document.querySelector('div#res');

    //Coleta de informações
    let n1 = Number(window.prompt("Informe o primeiro número"));
    let n2 = Number(window.prompt("Informe o segundo número"));

    //faz o calculo e exibe o resultado
    let r = (n1 + n2);
    res.innerHTML = `<p>O resultado da sua operação é <strong>${r}</strong>.</p>`;
}