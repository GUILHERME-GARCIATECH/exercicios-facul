function calcular(){
    let nome = window.prompt("Digite o nome do aluno");
    let n1 = Number(window.prompt("Informe a primeira nota do aluno"));
    let n2 = Number(window.prompt("Informe a segunda nota do aluno"));
    let media = (n1+n2)/2;
    let msg;
    if (media >= 6){
        msg = `<p>Parabens ${nome}😊. Você foi aprovado matéria! Sua média foi ${media}</p>`;
    }else{
        msg = `<p>Sinto muito ${nome}😣. Você foi reprovado! Sua média foi ${media}</p>`;
    }
    let res = document.getElementById('situacao');
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>...</p>`
    res.innerHTML += `<p>As notas obtidas <mark>${n1.toFixed(2)}</mark> e <mark>${n2.toFixed(2)}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é <strong style'color: red;'>${msg}</strong></p>`
}   
