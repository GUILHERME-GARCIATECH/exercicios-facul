function calculo(){
    let res = document.querySelector('div#res');
    res.innerHTML = ``;
    
    const amigos = ["Fernando","Guilherme","Junior","Carlos","Isaac"]

    for(let i = 0; i < amigos.length; i++){
        res.innerHTML += `<p>${amigo[i]}</p>`
    }
}
