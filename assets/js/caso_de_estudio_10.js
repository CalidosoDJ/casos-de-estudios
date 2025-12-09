/**
 * caso de estudio numero 10 hecho por Andres David Tulandi  
 */
function verificarnum() {

    let num = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

        if (!Number.isInteger(num)){

        resultado.textContent="¡ingrese un numero valido!";
            return;
        }
        if(num % 2 === 0){
            resultado.textContent = num + " el numero es par.";
        } else {
            resultado.textContent = num + " el numero es impar.";
        }
    }
    document.getElementById("par_o_impar").innerHTML= "" + resultado.textContent;
