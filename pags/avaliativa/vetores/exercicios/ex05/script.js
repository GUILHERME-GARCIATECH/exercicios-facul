function calcular(){
    
    let res = document.querySelector('div#res');
    res.innerHTML = '';
    const frutas = ["maçã","uva","goiaba","banana","maracuja"];
    let f = window.prompt("Qual fruta você deseja buscar? Maçã, uva, goiaba, banana, ou maracuja?");
    let p = frutas.indexOf(f);

    if(p === -1){
        res.innerHTML = `<p>Sua fruta não esta disponivel!</p>`;
    }else{
        res.innerHTML = `<p>Sua fruta esta na ${p+1} posição!</p>`;
    }
   
}

// let p = null;

//     for(let i = 0; i < 5; i++){
//         if(f == frutas[i]){
//             p = i;
//             break;
//         }
//     }
//     if(p === null){
//         res.innerHTML = `<p>Sua fruta não esta disponivel!</p>`
//     }else{
//         res.innerHTML = `<p>Sua fruta esta na ${p+1} posição!</p>`   
//     }