function calculo() {
    let res = document.querySelector('div#res');
    res.innerHTML = ``;

    const amigos = ["Fernando", "Guilherme", "Junior", "Carlos", "Isaac"]

    res.innerHTML = `<p>Lista de amigos:</p>`
    for (let i = 0; i < amigos.length; i++) {
        res.innerHTML += `<p>${amigos[i]}</p>`
    }
}
