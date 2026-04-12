function calcular(){
    let res = document.querySelector('div#res');

    let senha = window.prompt("Defina sua senha!");
    window.alert("SENHA DEFINIDA!");
    let senha1 = window.prompt("Informe sua senha");

    while(senha1 != senha){
        window.alert("SENHA INCORRETA!");
       senha1 = window.prompt("Informe sua senha novamente");
    }
    alert("Senha correta. Seja bem vindo!");

}