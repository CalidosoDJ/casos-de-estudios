// hamburguesas
function calcularHamburguesas() {
    let tipo = Number(document.getElementById("tipo").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    let tarjeta = document.getElementById("tarjeta").value;

    if (cantidad <= 0) {
        document.getElementById("resultado3").innerHTML = "La cantidad debe ser mayor a 0.";
        return
    }

    if (cantidad > 0 && tipo === 1) {
        total = cantidad * 20000;
        document.getElementById("resultado3").innerHTML = "El total a pagar es: $" + total;

    } else if (cantidad > 0 && tipo === 2) {
        total = cantidad * 25000;
        document.getElementById("resultado3").innerHTML = "El total a pagar es: $" + total;
    } else if (cantidad > 0 && tipo === 3) {
        total = cantidad * 28000;
        document.getElementById("resultado3").innerHTML = "El total a pagar es: $" + total;
    }
    if (tarjeta === "si") {
        descuento = total * 0.07;
        totalFinal = total + descuento;
            document.getElementById("resultado3").innerHTML = "El total a pagar con tarjeta es: $" + totalFinal;
    }else (tarjeta === "no") 
        descuento = 0;
        totalFinal = total + descuento;
        document.getElementById("resultado3").innerHTML = "El total a pagar con tarjeta es: $" + totalFinal;

        
    document.getElementById("resultado3").innerHTML = "El precio unitario es: $" + total;
    document.getElementById("resultado3").innerHTML += "<br>La cantidad de hamburguesas es: " + cantidad;
    document.getElementById("resultado3").innerHTML += "<br>El pago es con tarjeta?: " + tarjeta;
    document.getElementById("resultado3").innerHTML += "<br>El total sin cargo es: $" + total;
    document.getElementById("resultado3").innerHTML += "<br>El cargo por tarjeta es: $" + descuento.toFixed(2);
    document.getElementById("resultado3").innerHTML += "<br>El total a pagar es: $" + totalFinal;


}