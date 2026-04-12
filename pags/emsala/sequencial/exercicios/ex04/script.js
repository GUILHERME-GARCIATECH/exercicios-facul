function incio(){
    let nome = window.prompt("Qual é seu nome?");
    let res = window.document.getElementById('resultado');
    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer</p>`
}