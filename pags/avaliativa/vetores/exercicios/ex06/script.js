function calcular(){
    let res = document.querySelector('div#res');
    let v = new Array(5);

    for(let i = 0; i < v.length; i++){
        v[i] = window.prompt(`Informe o ${i+1}º numero!`);
    }

    let texto = v.reverse().join(', ');
    res.innerHTML = `<p>Inverso do vetor: [${texto}]</p>`
    
    }


//     Logica sem reverse

//     let res = document.querySelector('div#res');
//     let v = new Array(5);
//     let texto = "";

//     for(let i = 0; i < v.length; i++){
//         v[i] = window.prompt(`Informe o ${i+1}º numero!`);
//     }

//     for(let i = v.length; i > 0; i--){
//         texto += v[i-1];
//         if(i > 1) texto += ", ";
//     }
    
//     res.innerHTML = `<p>Inverso: [${texto}]</p>`