function calcular(){
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Você quer os multiplos de qual número?"));
    let q = Number(window.prompt("Você quer quantos multiplos?"));
    let v = []

    for(let i = 0; i < q; i++){
        v.push(n*(i+1));
    }

    res.innerHTML = `<p>Os primeiros ${q} multiplos de ${n} são: ${v.join(', ')}</p>`
}