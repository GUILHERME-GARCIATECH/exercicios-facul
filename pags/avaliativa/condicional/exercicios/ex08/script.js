function calcular(){
    let n = Number(window.prompt("Informe o número"));
    let res = document.querySelector('div#res');
    let dia = "";

    switch(n){
        case 1:
         dia = "domingo";
         break;
        case 2:
         dia = "segunda-feira";
         break;
        case 3:
         dia = "terça-feira";
         break;
        case 4:
         dia = "quarta-feira";
         break;
        case 5:
         dia = "quinta-feira";
         break;
        case 6:
         dia = "sexta-feira";
         break;
        case 7:
         dia = "sabado";
         break;
        default:
         res.innerHTML = `<p style="color: #ff3333">Entra Invalida! Tente novamente.</p>`;
         return;
    }
    res.innerHTML = `<p>Hoje é ${dia}!.</p>`;
}