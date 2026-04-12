function calculo(){
    let res = document.querySelector('div#res');
    res.innerHTML = ``;
    let ns = Number(window.prompt("Quantos numeros deseja informar?"));
    const vetor = new Array(ns)

    for(let i = 0; i < ns; i++){
        vetor[i] = Number(window.prompt(`Entre com o ${i+1} numero`))   
    }
    res.innerHTML = `<p><strong>Vetor = [${vetor.join(',')}]</strong><p>`
}
