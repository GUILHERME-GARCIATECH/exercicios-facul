function calcular() {
    let res = document.querySelector('div#res');
    let n = Number(window.prompt("Quantas pessoas vai informar?"));
    const pessoa = new Array(n);
    const n1 = new Array(n);
    const n2 = new Array(n);
    const m = new Array(n);
   
    for(let i = 0; i < n; i++){
        alert(`Dados da ${i+1}ª pessoa:`);
        pessoa[i] = window.prompt("Nome:");
        n1[i] = Number(window.prompt("Nota 1º Semestre:"));
        n2[i] = Number(window.prompt("Nota 2º Semestre:"));
        m[i] = (n1[i] + n2 [i])/2
    }

     res.innerHTML = `<p>Alunos aprovados!</p>`
    for(let i = 0; i < n; i++){
        if(m[i] >= 6){
            res.innerHTML += `<p>${pessoa[i]} com média ${m[i]}!</p>`
        }
    }
}
