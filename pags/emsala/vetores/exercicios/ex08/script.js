function calcular(){
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantos valores vai ter cada vetor?"));
    let a = [];
    let b = [];
    let c = [];

    for(let i = 0; i < n; i++){
        a.push(Number(window.prompt(`Digite o valor ${i+1} de A:`))); 
        b.push(Number(window.prompt(`Digite o valor ${i+1} de B:`)));
        c.push(a[i] + b[i]); 
    }

    res.innerHTML = `<p>Valores do vetor A = [${a.join(', ')}]</p> 
    <p>Valores do vetor B = [${b.join(', ')}]</p> 
    <p>Soma dos valores dos vetores = [${c.join(', ')}] </p>` 
}