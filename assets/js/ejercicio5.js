// Fedepanela
function calcularGanancia(){
    let tipo_panela = Number(document.getElementById("tipo_panela").value);
    let tamaño = Number(document.getElementById("tamaño").value);
    let p_kilo = Number(document.getElementById("p_kilo").value);
    let k_producido = Number(document.getElementById("k_producido").value);
    
    if(tipo_panela === 1 && tamaño === 1){
        sumar = 1200;
        precio_final = p_kilo + sumar;
    }
    if (tipo_panela === 1 && tamaño === 2){ 
            sumar = 830;
            precio_final = p_kilo + sumar;
        }
    if (tipo_panela === 2 && tamaño === 1){
            restar = 540
            precio_final = p_kilo - restar;
         }
    if (tipo_panela === 2 && tamaño === 2){
                restar = 350
                precio_final = p_kilo - restar;
            }
            
    precio_final * k_producido;
    ganancia = precio_final * k_producido;

    document.getElementById("resultado5").innerHTML = "La ganancia total es de: " + ganancia  + " pesos.";
    }
      
