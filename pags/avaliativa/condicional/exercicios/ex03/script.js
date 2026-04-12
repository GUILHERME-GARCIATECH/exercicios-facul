function calcular(){
    let n1 = Number(window.prompt("Qual o valor da sua primeira nota?"));
    let n2 = Number(window.prompt("Qual o valor da sua segunda nota?"));
    let m = (n1+n2)/2;

    let res = document.querySelector('div#res');
    if(m>=7){
        res.innerHTML = `<p>Sua média do semestre é igual a ${m}. Você esta aprovado!</p>`
    }else if(m<7 && m>=5){
        res.innerHTML = `<p>Sua média do semestre é igual a ${m}. Você esta em recuperação!</p>`
    }else{
        res.innerHTML = `<p>Sua média do semestre é igual a ${m}. Você foi reprovado!</p>`
    }
}