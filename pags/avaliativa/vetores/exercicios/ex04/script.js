function calcular(){
    let res = document.querySelector('div#res');
    res.innerHTML = '';

    for(let i = 2; i < 50; i+=2){
        let v = i;
        res.innerHTML += `<p>${i}</p>`
    }
}