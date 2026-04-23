function calcular() {
    let res = document.querySelector('div#res');
    let v = [];
    let s = 0;

    for (let i = 0; i < 5; i++) {
        v.push(Number(window.prompt(`Informe a nota do ${i + 1} Aluno:`)));
    }

    let m = v.reduce((acc, cur) => acc + cur, 0) / 5

    for (let i = 0; i < 5; i++) {
        if (v[i] > m) {
            s += 1;
        }
    }
    res.innerHTML = `<p>A notas dos alunos foram, respectivamente, ${v.join(', ')}</p>`
    res.innerHTML += `<p>A média da turma é ${m}! ${s} alunos ficaram acima da média.</p>`
}