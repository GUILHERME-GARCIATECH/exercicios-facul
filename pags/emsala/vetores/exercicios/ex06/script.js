function calcular(){
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantos numeros você vai digitar?"))
    const v = [];
    
    
    for(let i = 0; i < n; i++){
        let p = Number(window.prompt(`Informe o ${i+1} número:`))

        if(p % 2 === 0){
            v.push(p)
        }
    }
    res.innerHTML = `<p>NUMEROS PARES: ${v.join(', ')}</p>`
    res.innerHTML += `<p>QUANTIDADE DE PARES = ${v.length}</p>`
}