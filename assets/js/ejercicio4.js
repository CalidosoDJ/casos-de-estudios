//TCC

function calcularPeso(){
    let peso = Number(document.getElementById("paquete").value);
    let zona = Number(document.getElementById("zona").value);

    if (peso > 85){
        document.getElementById("resultado4").innerHTML = `El paquete con peso ${peso}kg excede el peso permitido.`;
        return;
    }

    if (zona === 1){
        total = peso * 210;
    } else if (zona === 2){
        total = peso * 180;
    } else if (zona === 3){
        total = peso * 220;
    } else if (zona === 4){
        total = peso * 340;
    } else if (zona === 5){
        total = peso * 370;

    }   if (zona != 1 && zona != 2 && zona != 3 && zona != 4 && zona != 5){
        document.getElementById("resultado4").innerHTML = "La zona no válida.";
        return;
    }
    document.getElementById("resultado4").innerHTML = `El valor de envío para un paquete de ${peso}kg a la zona ${zona} es: $${total}.`;

}