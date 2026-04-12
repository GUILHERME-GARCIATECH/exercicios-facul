function calcular() {
    let res = document.querySelector('div#res');
    res.innerHTML = '';
    let n = Number(window.prompt("Serão digitados dados de quantos produtos?"));
    let somaCompra = 0;
    let somaVenda = 0;
    let lucro = 0;
    let cont10 = 0;
    let cont10a20 = 0;
    let cont20 = 0

    for(let i = 0; i < n; i++){
        window.alert(`Produto ${i+1}`);
        let nome = window.prompt("Nome:")
        let compra = Number(window.prompt("Preço de compra:"));
        let venda = Number(window.prompt("Preço de venda:"));
        somaCompra += compra;
        somaVenda += venda;

        const perLucro = (venda-compra) / compra
        if(perLucro < 0.1){
            cont10 += 1;
        }else if(perLucro >= 0.1 && perLucro <= 0.2){
            cont10a20 += 1;
        }else{
            cont20 += 1;
        }

        lucro += (venda-compra);
    }
    res.innerHTML += `<p>Lucro abaixo de 10%: ${cont10}</p>`;
    res.innerHTML += `<p>lucro entre 10% e 20%: ${cont10a20}</p>`;
    res.innerHTML += `<p>lucro maior que 20%: ${cont20}</p>`;
    res.innerHTML += `<p>Valor total de compra: R$${somaCompra.toFixed(2)}</p>`;
    res.innerHTML += `<p>Valor total de venda: R$${somaVenda.toFixed(2)}</p>`;
    res.innerHTML += `<p>Lucro total: R$${lucro.toFixed(2)}</p>`;
}
