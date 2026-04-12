function calcular(){
    let res = document.querySelector('div#res');
    let n = window.prompt("Informe o numero!");

    if(n === null || isNaN(n)){
        alert("Por favor insira um valor valido!")
        return;
    }
    n = Number(n);
    let f = n;

    res.innerHTML = '';

    if(f === 0){
        res.innerHTML = `<p><strong>Fatorial de 0 é igual a 1!</strong></p>`
    }else if(n<0){
         res.innerHTML = `<p style="color: #ff4444">Não exite fatorial de numero negativo!</p>`
    }else{
        for(let i = n - 1; i>=1; i--){
            let a = f;
            f *= i;
            res.innerHTML += `<p>${a} x ${i} = ${f}</p>`
        }
        res.innerHTML += `<p><strong>Resultado Final: ${f}</strong></p>`;
    }
   
}