function calcular(){
    let res = document.querySelector('div#res');
    const v = [2,3,5,6,8];
    let soma = 0;
    for(let i = 0; i < 5; i++){
        soma += v[i]
    }
    res.innerHTML += `<p>A soma dos itens do array é igual a ${soma}</p>`
}