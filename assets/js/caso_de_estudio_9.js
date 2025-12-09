/**
 * caso de estudio numero 9 hecho por Andres David Tulandi  
 */
function clasificarRueda() {
    let tipo = document.getElementById("tipo").value;
    let grosor = document.getElementById("grosor").value;
    let diametro = document.getElementById("diametro").value;
    let marca = document.getElementById("marca").value;

    let mensaje ="";

    if (diametro > 1.4 && grosor == 1.2)
        {
        console.log(mensaje="La rueda es para un vehículo grande");
    }   else if (diametro > 0.8) {
        window.alert(mensaje="La rueda es para un vehículo mediano");
    }   else {
        document.getElementById("resultado").innerHTML = "La rueda es para un vehículo pequeño";
    }
    let advertencia =""; 

    if ((diametro > 1.4 && grosor < 0.4) ||
            (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {

            advertencia = "El grosor para esta rueda es inferior al recomendado";
    }
    document.getElementById("resultado").innerHTML = "El grosor para esta rueda es inferior al recomendado" ;
}
