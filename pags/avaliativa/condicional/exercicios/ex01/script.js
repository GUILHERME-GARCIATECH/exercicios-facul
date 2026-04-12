function calcular(){
    let n1 = Number(window.prompt("Informe o número"));
    let res = document.querySelector('div#res');

    if (n1 % 2 == 0) {
        res.innerHTML = `<p>O número ${n1} é <strong>PAR</strong>!</p>`;
    }else{
        res.innerHTML = `<p>O número ${n1} é <strong>IMPAR</strong>!</p>`;
    }    
}