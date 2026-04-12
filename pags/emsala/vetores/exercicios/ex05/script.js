function calcular() {
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantas pessoas deseja informar?"));

    let nomesMenores = [];
    let somaAltura = 0;
    let menores16 = 0;

    for (let i = 0; i < n; i++) {
        let nome = window.prompt(`Nome da ${i + 1}ª pessoa:`);
        let idade = Number(window.prompt(`Idade da ${i + 1}ª pessoa:`));
        let altura = Number(window.prompt(`Altura da ${i + 1}ª pessoa:`))
       

        somaAltura += altura;

        if (idade < 16) {
            menores16++;
            nomesMenores.push(nome); 
        }
    }

    let media = somaAltura / n;
    let porcentagem = (menores16 / n) * 100;

    res.innerHTML = `
        <p>Altura média: <strong>${media.toFixed(2)}</strong></p>
        <p>Menores de 16 anos: <strong>${porcentagem.toFixed(2)}%</strong></p>
        <p>Nomes dos menores: ${nomesMenores.length > 0 ? nomesMenores.join(', ') : 'Nenhum'}</p>`;
}
let texto = '';
if(nomeMenores.length > 0){
    texto = nomeMenores.join(', ')
}else{
    texto = 'Nenhum'
}
 res.innerHTML = `Nome dos menores de 16: ${texto}`