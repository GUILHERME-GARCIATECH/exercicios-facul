function calcular(){
    let res = document.querySelector('div#res');

    const v = new Array(5);
    let m = 999;
    let M = 0;
    
    for(let i = 0; i < 5; i++){
        v[i] = Number(window.prompt(`Informe o ${i+1}º número:`))
    }
}
