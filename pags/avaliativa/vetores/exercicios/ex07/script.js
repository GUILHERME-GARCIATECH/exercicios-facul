function calcular(){
    let res = document.querySelector('div#res');
    let n1 = 0;
    let n2 = 1
    res.innerHTML = '';

    for(let i = 0; i<10; i++){
        let n3 = n1+n2;
        res.innerHTML += `<p>${i+1}º termo = ${n2}</p>`

        n1 = n2;
        n2 = n3;
        
    }
    
}