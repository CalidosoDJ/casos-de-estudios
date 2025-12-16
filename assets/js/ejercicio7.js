// salario empleado

function calcularSalario() {
    let horasTrabajadas = Number(document.getElementById("hr_lab").value);
    let tarifa = Number(document.getElementById("tarifa").value);


    if (horasTrabajadas > 40){
        tarifa = horasTrabajadas * 0.50;
    } 

    document.getElementById("resultado7").innerHTML = "El salario del empleado es: " + (tarifa * horasTrabajadas);
}