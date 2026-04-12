function calcular(){
    let res = document.querySelector('div#res');
    res.innerHTML = '';

    let n = Number(window.prompt("Quantos numeros deseja digitar?"));
    const v = [];

    for(let i = 0; i < n; i++){
        v.push(Number(window.prompt(`Informe o ${i+1}º numero:`)));
    }

    const pares = v.filter(num => num % 2 === 0);

    res.innerHTML = `<p>Numeros digitados: ${v.join(', ')}</p>`
    res.innerHTML += `<p>Numeros pares: ${pares.join(', ')}</p>`;
}