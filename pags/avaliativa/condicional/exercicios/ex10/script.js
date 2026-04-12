function calculo() {
    let campoPreco = document.querySelector('input#preco');
    let listaPagamento = document.querySelector('select#pagamento');
    let res = document.querySelector('div#res');

    let preco = Number(campoPreco.value);
    let opcao = listaPagamento.value; 

    if (preco <= 0) {
        res.innerHTML = `<p style="color: #ff4444;">Por favor, informe um preço válido.</p>`;
        return;
    }

    let total;
    let detalhe = "";

    switch(opcao) {
        case "1":
            total = preco * 0.90;
            detalhe = "Desconto de 10% aplicado.";
            break;
        case "2":
            total = preco * 0.95;
            detalhe = "Desconto de 5% aplicado.";
            break;
        case "3":
            total = preco;
            detalhe = "Valor normal (2x de R$ " + (total/2).toFixed(2) + ").";
            break;
        case "4":
            total = preco * 1.10;
            detalhe = "Juros de 10% aplicado.";
            break;
        default:
            res.innerHTML = "<p>Erro inesperado.</p>";
            return;
    }

    res.innerHTML = `
        <p>${detalhe}</p>
        <p>Total a pagar: <strong>R$ ${total.toFixed(2)}</strong></p>`;
}
