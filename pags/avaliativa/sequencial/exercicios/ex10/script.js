function calcular(){
    let h = Number(window.prompt("Informe número de horas que você trabalhou esse mês."));
    let v = Number(window.prompt("Informe o quanto você ganha por hora."));
    let sb = h*v;
    let sl = sb - (sb*0.08);

    let res = document.querySelector('div#res');

    res.innerHTML = `
    <p><strong>Resultado:</strong></p>
        <p>Horas trabalhadas: ${h}h</p>
        <p>Ganho por hora: R$ ${v.toFixed(2)}</p>
        <p>Salário Bruto: R$ ${sb.toFixed(2)}</p>
        <p>Salário Líquido (8% desc.): <strong>R$ ${sl.toFixed(2)}</strong></p>
    `
}