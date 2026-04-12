function calcular(){
    let res = document.querySelector('div#res');
    let mi = 999;
    let Mi = 0;
    let idade;
    
    for(let i = 0; i < 5; i++){
        idade = Number(window.prompt(`Informe a idade da ${i+1}ª pessoa.`));
        if(idade > Mi){
            Mi = idade;
        }
        if(idade < mi){
            mi = idade;
        }
    }
   
    res.innerHTML = `<p>A pessoa mais nova tem ${mi} anos e a mais velha tem ${Mi} anos.</p>`
}