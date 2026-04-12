function calcular(){
    let a = Number(window.prompt("Informe o ano que deseja verificar"));
    
    let res = document.querySelector('div#res');

    if((a % 4 == 0 && a % 100 != 0) || (a % 400 == 0)){
        res.innerHTML = `<p>O ano ${a} é bissexto.</p>`;
    }else{
        res.innerHTML = `<p>O ano ${a} não é bissexto.</p>`
    }
    
}