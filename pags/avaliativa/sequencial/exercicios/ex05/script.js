function calcular(){
    let res = document.querySelector('div#res');
    
    //Coleta Informação
    let ld1 = Number(window.prompt("Informe o comprimendo"));
    let ld2 = Number(window.prompt("Informe a largura"));

    //Calcula e exibe o resultado
    let a = (ld1*ld2);
    res.innerHTML = `<p>A área do seu terreno é igual a ${a}m².</p>`
}