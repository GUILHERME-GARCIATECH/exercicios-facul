function calcular() {
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantas pessoas vai informar?"));
    const pessoa = new Array(n);
    const idade = new Array(n);
   
    for(let i = 0; i < n; i++){
        alert(`Dados da ${i+1}ª pessoa:`);
        pessoa[i] = window.prompt("Nome:");
        idade[i] = window.prompt("Idade:");
    }

    let maior = idade[0];
    let Pmaior = 0;
    for(let i = 1; i < n; i++){
        if(idade[i] > maior){
            maior = idade[i];
            Pmaior = i;
        }
    }

    res.innerHTML = `<p>PESSOA MAIS VELHA: ${pessoa[Pmaior]}</p>
    <p>Ele(a) tem ${maior} anos!</p>`;

}
