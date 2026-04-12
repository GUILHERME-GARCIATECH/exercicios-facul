function calcular(){
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantos numeros deseja informar?"));
    let v = [];

    for(let i = 0; i < n; i++){
        v[i] = Number(window.prompt(`Informe o ${i+1} número:`))
    }

    let mv = v[0]
    let pm = 0;

    for(let i = 1; i < n ; i++){
        if(mv < v[i]){
            mv = v[i];
            pm = i;
        }
    }

    res.innerHTML = `<p>MAIOR VALOR = ${mv}</p> 
    <p>POSICAO DO MAIOR VALOR = ${pm + 1}</p>`
    
}