function calcular(){
    let n1 = Number(window.prompt("Informe o primeiro número"));
    let n2 = Number(window.prompt("Informe o segundo número"));
    let o = window.prompt("Informe a operação (+, -, *, /):");
    let r;

    let res = document.querySelector('div#res');
    switch(o){
        case "+":
         r = n1+n2;
         break;
        case "-":
         r = n1-n2;
         break;
        case "/":
         r = n1/n2;   
         break;
        case "*":
         r = n1*n2
         break;
        default:
         res.innerHTML = `<p>Operação invalida! Tente novamente.</p>`;
         return;
    }
   
   res.innerHTML = `<p>O resultado de ${n1} ${o} ${n2} é igual a ${r}</p>`
}