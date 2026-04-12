function calcular(){
    let a = Number(window.prompt("Informe sua idade (em anos completo)"));
    let d = a*365;

    let res = document.querySelector('div#res');

    res.innerHTML = `<p>Você tem ${a} anos! Usa significa que já viveu ${d} dias de vida.</p>`
}