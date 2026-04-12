function calcular() {
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantas pessoas vai informar?"));
    let alturas = [];
    let somaAlturaMulheres = 0;
    let contMulheres = 0;
    let contHomens = 0; 
    
    for(let i = 0; i < n; i++){
        let altura = Number(window.prompt(`Altura da ${i+1}ª pessoa`));
        let genero = window.prompt(`Genero da ${i+1}ª pessoa`);

        alturas.push(altura);

        if (genero === 'F') {
            somaAlturaMulheres += altura;
            contMulheres++;
        } else {
            contHomens++;
        }
    }

    //const mediaMulheres = contMulheres > 0 ? (somaAlturaMulheres / contMulheres).toFixed(2) : 0;
    let mediaMulheres;
    if (contMulheres > 0) {
        mediaMulheres = (somaAlturaMulheres / contMulheres).toFixed(2); 
    }else {
        mediaMulheres = 0;
    }

    let maiorAltura = alturas[0];
    let Pmaior = 0;

    let menorAltura = alturas[0]; 
    let Pmenor = 0;             

    for(let i = 1; i < n; i++){
    
        if(alturas[i] > maiorAltura){
            maiorAltura = alturas[i];
            Pmaior = i;
        }
    
        if(alturas[i] < menorAltura){
            menorAltura = alturas[i];
            Pmenor = i;
        }
    }
    res.innerHTML = `<p>MEDIA DAS ALTURAS DAS MULHERES = ${mediaMulheres}</p>`;
    res.innerHTML += `<p>MAIOR ALTURA = ${maiorAltura} (Pessoa ${Pmaior + 1})</p>`;
    res.innerHTML += `<p>MENOR ALTURA = ${menorAltura} (Pessoa ${Pmenor + 1})</p>`;
    res.innerHTML += `<p>QUANTIDADE DE HOMENS = ${contHomens}</p>`;
    
}
