//Audifonos

function audifonos(){
    let c_audifonos = Number(document.getElementById("c_audif").value);

    if (c_audifonos >= 1000){
        total = c_audifonos * 49850;
    } else {
        total = c_audifonos * 71290;
    }

    document.getElementById("resultado6").innerHTML = "El total a pagar por los audifonos es de: $" + total;
}