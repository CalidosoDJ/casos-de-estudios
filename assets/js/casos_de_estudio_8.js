/**
 * caso de estudio numero 8 hecho por Andres David Tulandi  
 */
function numero_mayor_de_3_numeros(){
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let num3 = document.getElementById("num3").value;

let resultado;

resultado = Math.max(num1, num2, num3);

document.getElementById('numeromayor').innerHTML ="el mayor entre los 3 numeroes es:"+ resultado;
}