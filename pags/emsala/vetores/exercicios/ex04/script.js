function calcular(){
  let res = document.querySelector('div#res');
  let ns = Number(window.prompt("Quantos numeros você vai digitar?"));
  const nn = new Array(ns);
  let v = "";
  let s = 0;
  for(let i = 0; i < ns; i++){
    nn[i] = Number(window.prompt(`Informe o ${i+1} numero:`));
    s += nn[i]
    v += `${nn[i]}, `
  }
  let m = s/ns
  res.innerHTML = `<p>VALORES = [${nn.join(', ')}]</p>
  <p>SOMA = ${s}</p>
  <p>MÉDIA = ${m}</p>`
}
