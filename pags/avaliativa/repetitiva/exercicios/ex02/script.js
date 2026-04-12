function calcular(){
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Informe o numero."));
    let t;
    res.innerHTML = '';
    
   for(let i = 0; i <= 9; i++){
    t = n * (i + 1)
    res.innerHTML += `<p>${n} x ${i + 1} = ${t}</p>`
   }
}