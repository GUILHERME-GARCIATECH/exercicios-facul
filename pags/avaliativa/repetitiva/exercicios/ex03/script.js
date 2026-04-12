function calcular(){
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Qual o valor do numero?"));
    let c = 1;
    let soma = 0;
   
    for(let i = 1; i <= n; i++){
        soma += i;
    }

    res.innerHTML = `<p>A soma de todos os números de 1 até ${n} é: ${soma}</p>`
}

// while(c <= n){
//     soma += c;
//     c++;
// }

// do{  
//     soma += c;   
//     c++;
//}while(c<=n);