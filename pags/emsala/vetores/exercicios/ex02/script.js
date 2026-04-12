function calcular(){
// ex 03
    let a = 7
    let b = a - 6
    let v = []
    let c = "";
    while(b < a){
        v[b] = b * a
        c += `Vetor[${b}] = ${v[b]}, `
        b = b + 2
    }
    window.alert(c)
}
// ex 01
    // let a = 10;
    // let b = 20;
    // let c = ((a+b)/2);
    // c = c - 40;
    // const vetor = new Array(7); 
    // vetor[4] = a + b + c;

    // window.alert(`Vetor[4] = ${vetor[4]}`)

// ex 02
    // let a = 2;
    // let c = ""
    // let v = []
    // while(a < 6){
    //     v[a] = 10 * a;
    //     c += `Vetor[${a}] = ${v[a]}, `
    //     a = a + 1;
    // }
    // window.alert(`${c}`);