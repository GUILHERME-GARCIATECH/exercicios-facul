function calcular(){
  let res = document.querySelector('div#res');
  let ns = Number(window.prompt("Quantos numeros você vai digitar?"));
  const nn = []
  res.innerHTML = '';
  res.innerHTML = `<p>Esses são os numeros negativos</p>`
  for(let i = 0; i < ns; i++){
    let e = Number(window.prompt(`Informe o ${i+1} numero:`));
    if(e < 0){
        nn[i] = e;
        res.innerHTML += `<p>Numero negativo: ${nn[i]}</p>`
    }
  }
}
