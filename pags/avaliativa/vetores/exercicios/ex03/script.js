function calcular(){
    let res = document.querySelector('div#res');
    const v = [];
    
    for(let i = 0; i < 5; i++){
        v.push(Number(window.prompt(`Digite um o ${i+1} número:`)));
    }

    maior = v[0];
    menor = v[0];
    for(let i = 1; i < 5; i++){
        if(maior < v[i]){
            maior = v[i]
        }if(menor > v[i]){
            menor = v[i]
        }
    }

    res.innerHTML = `<p>Maior valor: ${maior}</p>`
    res.innerHTML += `<p>Menor valor: ${menor}</p>`
}
