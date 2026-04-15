function calcular() {
    let res = document.querySelector('div#res');
 
    const v1 = [1, 2, 2, 3, 4, 4, 4, 5];

    let v2 = [];

    for(let i = 0; i < v1.length; i++){
        if(!v2.includes(v1[i])){
            v2.push(v1[i])
        }
    }

    res.innerHTML = `<p>Vetor principal  = [${v1.join(', ')}]</p>
    <p>Vetor sem repetição = [${v2.join(', ')}]</p>`
}
