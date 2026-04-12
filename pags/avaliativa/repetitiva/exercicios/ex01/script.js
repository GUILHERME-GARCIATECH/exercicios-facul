//Contagem regressiva por loop e tempo

function contagem_regressiva(){
    let res = document.querySelector('div#res');
    res.innerHTML = ``;
    for (let i = 10; i >= 0; i--){

        setTimeout(function(){
            res.innerHTML = `<p>CONTAGEM REGRESSIVA!!</p>
            <p><strong>${i}</strong></p>`;
            if(i === 0){
                 res.innerHTML = `<p style="color: #ff4444">DECOLAGEM! 🚀</p>`;
            }
        }, (10-i) * 1000);

    }
}
// setTimeout(function(){}, 1000) //atraso e milisegundos

//Estrutura simples sem nenhum timer

// function contagem_regressiva() {
//     let res = document.getElementById('res');
//     res.innerHTML = ""; // Limpa antes de começar

//     // ESTRUTURA DE REPETIÇÃO (FOR)
//     for (let i = 10; i >= 1; i--) { 
//         res.innerHTML += `Número: ${i} <br>`; 
//     }
//     res.innerHTML += `<p style="color: #ff4444">DECOLAGEM! 🚀</p>`;
// }


//Contagem regressiva por segundo (sem estrutura repetitiva)
// function contagem_regressiva() {
//     let res = document.querySelector('div#res');
//     let i = 10;
 
//     let cronometro = setInterval(function() {
//         res.innerHTML = `<p>CONTAGEM REGRESSIVA!! ${i}</p>`;
//         if (i <= 0) {
//             res.innerHTML += `<p style="color: #ff4444;">DECOLAGEM! 🚀</p>`; 
//             clearInterval(cronometro); 
//         }
//         i--;}, 1000);
// }
    