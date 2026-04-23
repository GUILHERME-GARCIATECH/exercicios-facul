function calcular() {
    let res = document.querySelector('div#res');
    const v1 = [1, 2, 3];
    const v2 = [4, 5, 6];

    const v3 = [...v1, ...v2];

    res.innerHTML = `<p>Primeiro vetor = [${v1.join(', ')}]</p>
    <p>Segundo vetor = [${v2.join(', ')}]</p>
    <p>Vetor resultante = [${v3.join(', ')}]</p>`
}