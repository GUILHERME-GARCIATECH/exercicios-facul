function calcular() {
    let res = document.querySelector('div#res');
    let p;
    let c = 1;
    const r = Math.floor(Math.random() * 10) + 1;
    //alert(r) testar condição c == 1
    p = Number(window.prompt("De um palpite!"));

    while(p != r){
        alert("Valor incorreto! Tente novamente.")
        p = Number(window.prompt("Fale seu novo palpite!"));
        c++
    }
    if(c == 1){
        res.innerHTML = `<p style="color: #27b927">Valor correto!</p>
    <p>Você acertou de primeira. PARABENS!</p>`
    }else{
        res.innerHTML = `<p style="color: #27b927">Valor correto!</p>
    <p>Você precisou de ${c} tentativas para acertar!</p>`
    }
    
}
