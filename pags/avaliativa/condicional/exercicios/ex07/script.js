function calcular(){
    let r1 = Number(window.prompt("Informe o comprimento da primeira reta"));
    let r2 = Number(window.prompt("Informe o comprimento da segunda reta"));
    let r3 = Number(window.prompt("Informe o comprimento da tereira reta"));
    
    let res = document.querySelector('div#res');

    const ehTriangulo = (r1 + r2 > r3) && (r2 + r3 > r1) && (r1 + r3 > r2)
    
    if (ehTriangulo) {
        let tipo = "";
        if(r1 === r2 && r1 === r3){
            tipo = "EQUILATERO (todos os lados iguais)"
        }else if((r1 === r2) || (r1 === r3) || (r3 === r2)){
            tipo = "ISÓCELES (dois lados iguais)"
        }else{
            tipo = "ESCALENO (todos os lados diferentes)"
        }

        res.innerHTML = `<p>As retas ${r1}, ${r2} e ${r3} <strong>formam</strong> um triângulo! ✅</p>
        <p>Seu triangulo é um ${tipo}</p>`;
    } else {
        res.innerHTML = `<p>As retas <strong>não podem</strong> formar um triângulo. ❌</p>`;
    }
}