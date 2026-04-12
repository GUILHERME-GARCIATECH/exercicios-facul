function calcular() {
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantos elementos vai ter o vetor?"))
    let v = [];
    let s = 0;

    for(let i = 0; i < n; i++){
        let n = Number(window.prompt(`Informe o ${i+1}`));

        if(n % 2 === 0){
            v.push(n);
            s += n;
        }

    }
    if(v.length == 0){
        res.innerHTML = `<p>NENHUM NUMERO PAR</p>`
    }else{
        let m = s/v.length;
        res.innerHTML = `<p>MEDIA DOS PARES = ${m.toFixed(1)}</p>`
    }
    

}
