function calcular(){
    let kg = Number(window.prompt("Informe seu peso em kg"));
    let m = Number(window.prompt("Informe sua altura em metros"));
    let imc = kg/(m*m);

    let res = document.querySelector('div#res');
    let classificacao = "";

    if(imc<18.5){
        classificacao = "abaixo do peso";
    }else if(imc<25){
        classificacao = "no peso ideal";
    }else if(imc<30){
        classificacao = "com sobrepeso";
    }else{
        classificacao = "com obesidade";
    }

    res.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong>.</p>
                     <p>Você está ${classificacao}.</p>`;
}