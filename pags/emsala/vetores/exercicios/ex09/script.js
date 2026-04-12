function calcular(){
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantos elementos vai ter o vetor?"));
    let s = 0;
    const v = new Array(n);
     res.innerHTML = '';
    for(let i = 0; i < n; i++){
        v[i] = Number(window.prompt(`Informe o ${i+1} valor:`));
        s += v[i];
    }

    let m = s/v.length;
    res.innerHTML += `<p>MÉDIA DO VETOR: ${m.toFixed(3)}</p>`
    res.innerHTML += `<p>ELEMENTOS ABAIXO DA MÉDIA:</p>`
    for(let i = 0; i < n; i++){
        if(v[i] < m){
            res.innerHTML += `<p>${v[i]}</p>`
        }
    }
    
}