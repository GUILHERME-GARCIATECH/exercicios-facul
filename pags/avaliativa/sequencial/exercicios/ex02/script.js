function calcular(){
    let res = document.querySelector('div#res');
    //Coleta informação
    let n = Number(window.prompt("Informe o número aqui."));

    //Faz o calculo e exibe o resultado
    let a = (n-1);
    let s = (n+1);
    res.innerHTML = `<p>O antecessor e sucessor do número ${n} são, respectivamente, <strong>${a} e ${s}.</strong></p>`;
}