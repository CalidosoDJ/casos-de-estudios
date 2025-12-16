//arturo calle
function calcularDescuento() {
    let porcentaje, descuento, total;
    let precioTraje = Number(document.getElementById("precio_traje").value);

    if (precioTraje <= 0) {
        document.getElementById("resultado2").innerHTML = "Ingrese un precio válido! ";
        return
    }

    if (precioTraje > 125000){
        let descuento = precioTraje * 0.35;
        porcentaje = 0.35;

        total = precioTraje - descuento;

        document.getElementById("resultado2").innerHTML += "El descuento es de: $" + descuento;
        document.getElementById("resultado2").innerHTML += "<br>El porcentaje aplicado es de: " + (porcentaje * 100) + "%";
        document.getElementById("resultado2").innerHTML += "<br>El total a pagar es: $" + (precioTraje - descuento);

    } else if (precioTraje <= 125000){
        let descuento = precioTraje * 0.10;
        porcentaje = 0.10;

        document.getElementById("resultado2").innerHTML += "El descuento es de: $" + descuento;
        document.getElementById("resultado2").innerHTML += "<br>El porcentaje aplicado es de: " + (porcentaje * 100) + "%";
        document.getElementById("resultado2").innerHTML += "<br>El total a pagar es: $" + (precioTraje - descuento);
    }
    descuento = precioTraje * porcentaje;
    total = precioTraje - descuento;
}
