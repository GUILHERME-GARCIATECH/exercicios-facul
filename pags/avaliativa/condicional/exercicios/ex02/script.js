function calcular(){
    let a1 = Number(window.prompt("Informe seu ano de nascimento."));
    let a2 = Number(window.prompt("Informe o ano atual."));
    let idade = a2-a1;
    let res = document.querySelector('div#res');
    if(idade >= 18){
        res.innerHTML = `<p>Você tem ${idade} anos. Você pode dirigir!.</p>`;
    }else{
        res.innerHTML = `<p>Você tem ${idade} anos. Você não pode dirigir!.</p>`;
    }if(idade > 100){
         res.innerHTML = `<p>Você tem ${idade} anos. Você provavelmente ta morto😔.</p>`;
    }
}