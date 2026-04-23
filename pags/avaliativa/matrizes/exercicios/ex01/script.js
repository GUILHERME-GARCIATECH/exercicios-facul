function calculo() {
    let res = document.querySelector('div#res');
    res.innerHTML = ``;

    const num = [
        [1,2,3], 
        [4,5,6], 
        [7,8,9],
    ];

    for (let i = 0; i < num.length; i++){
        let texto = '';

        for(let j = 0; j < num[i].length; j++){
            texto += num[i][j] + " ";
        }

        res.innerHTML += `<p>[${texto}]</p>`
    }
}
