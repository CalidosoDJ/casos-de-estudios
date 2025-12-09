/**
 * caso de estudio numero 11 hecho por Andres David Tulandi  
 */
let peso = Number(document.getElementById("peso").value);
let altura = Number(document.getElementById("altura").value);

let Indice_masa = peso /( altura  * altura);
let diagnostico = "";

function bascula(){
    if (Indice_masa < 16) {
        diagnostico = "Criterio de ingreso en hospital";
    }
        
    else if (Indice_masa > 16 & Indice_masa <17){
        diagnostico = "infrapeso";
    }
    else if (Indice_masa > 17 & Indice_masa <18){
        diagnostico = "Bajo peso";
    }
    else if (Indice_masa > 18 & Indice_masa <25){
        diagnostico = "Peso normal";
    }
    else if (Indice_masa > 25 & Indice_masa <30){
    diagnostico = "Sobrepeso (Obesidad de grado I)";
    }
    else if (Indice_masa > 30 & Indice_masa <35){
    diagnostico = "Sobrepeso crónico (Obesidad de grado II )";
    }
    else if (Indice_masa > 35 & Indice_masa <40){
    diagnostico = "Sobrepeso crónico (Obesidad de grado II )";
    }
    else if (Indice_masa > 40 ){
    diagnostico = "Obesidad mórbida (Obesidad de grado IV)";
    }
        document.getElementById("imc").innerHTML = {imc:$(imc.toFixed(2))}<br>
        diagnostico:<strong>${diagnostico}</strong>;
        ;
    }
    
