function calcular(){

    let res = document.querySelector('div#res');

    let h = Number(window.prompt("Que horas são?"));
    if(h>=0 && h<=11){
        res.innerHTML = `<p>Bom dia. São ${h} horas da manhã!</p>`
    }else if(h>=12 && h<=17){
        res.innerHTML = `<p>Boa tarde. São ${h} horas da tarde!</p>`
    }else if(h>=18 && h<=23){
        res.innerHTML = `<p>Boa noite. São ${h} horas da noite!</p>`
    }else{
         res.innerHTML = `<p>Valor incorreto! Tente novamente...`
    }
  
}