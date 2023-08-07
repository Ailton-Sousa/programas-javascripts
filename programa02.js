//Função que retorna a soma de dois valores

function soma(a, b) {
    let soma = a + b;
    return soma;
}

let num01 = 5;
let num02 = 5;
let total = soma(num01, num02);
document.getElementById("view01").innerHTML = total;