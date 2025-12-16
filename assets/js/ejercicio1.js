//La cosecha parrilada
function calcularBanquetes(){
    let descuento1 = 18500;
    let descuento2 = 16000;
    let num_clientes = Number(document.getElementById("num_clientes").value);

    if (num_clientes <= 200){
        let total_banquetes = 25000 * num_clientes;
        document.getElementById("resultado").innerHTML = "El total a pagar por " + num_clientes + " banquetes es de: $" + total_banquetes;
        
    } else if (num_clientes = -1 ){
        document.getElementById("resultado").innerHTML = "Ingrese un numero valido";}

    else if(num_clientes > 200 && num_clientes <= 300){
        let total_banquetes = descuento1 * num_clientes;
        document.getElementById("resultado").innerHTML = "El total a pagar por " + num_clientes + " banquetes es de: $" + total_banquetes;

    } else if(num_clientes > 300){
        let total_banquetes = descuento2 * num_clientes;
        document.getElementById("resultado").innerHTML = "El total a pagar por " + num_clientes + " banquetes es de: $" + total_banquetes;

    } else(num_clientes < 0)
        document.getElementById("resultado").innerHTML = "Ingrese un numero valido";
    
    document.getElementById("resultado").innerHTML = "El total a pagar por " + num_clientes + " banquetes es de: $" + total_banquetes;

}
