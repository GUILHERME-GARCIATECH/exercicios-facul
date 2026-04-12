function calcular(){
    let res = document.querySelector('div#res');
    let s = 0;
    let c = 0;
    let p;
    do{
        p = Number(window.prompt("Informe o valor do produdo!"));
        if(p > 0){
            s = s + p;
            c++;
        }
    }while(p != 0 && p > 0);
    
    res.innerHTML = `<p>Você informou ${c} produtos. A soma do valor deles é igual a <strong>R$${s.toFixed(2)}</strong></p>`;
}