//Função para verificar se um numero e par ou impa

function verificador_par_impa(numero) {

   let valor = numero % 2;

    if (valor === 0) { return "Par"; }
    else {
            return "Impa";
        }
}
 

let res = verificador_par_impa(2);


document.getElementById("##").innerHTML = res;
