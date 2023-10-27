function saludar(){
    alert("Bienvenido")
}


function opciones(){
    let nombre = prompt("Ingrese su nombre")
    let opc = prompt(nombre + " ingrese la opcion: 1) Cuota. 2) Credito. 3) Seguro automotor. 4) Salir")
    let sueldo = prompt(nombre + " ingrese su sueldo")
    while(opc != "ESC") {
        switch (parseInt(opc)) {
            case 1:
                cuota = sueldo * 0.3
                alert(nombre + " su cuota maxima es de " + cuota)
            break;
            case 2:
                if(sueldo <10000){
                    let credito = sueldo * 10
                    alert(nombre + " su credito puede ser de " + credito)    
                }else if(sueldo >=10000 && sueldo <15000){
                    let credito = sueldo * 15
                    alert(nombre + " su credito puede ser de " + credito)
                }else if(sueldo >=15000){
                    let credito = sueldo * 20
                    alert(nombre + " su credito puede ser de " + credito)
                }
            break;
            case 3:
            let tipo = prompt(nombre + " ingrese tipo de vehiculo")
            if(tipo == 'moto'){
                let total = sueldo / 20
                alert(nombre + " su cotizacion es de: " + total)
            }else if(tipo == 'auto'){
                let total = sueldo / 15
                alert(nombre + " su cotizacion es de: " + total)
            }else if(tipo == 'camioneta'){
                let total = sueldo / 10
                alert(nombre + " su cotizacion es de: " + total)
            }
            break;
            case 4:
                alert("Lo esperamos!");
                opc = "ESC"
                break;
            default:
                alert("Esa opcion no existe");
                break;
        }
        
        opc = prompt("Ingrese opcion")

    }
}

saludar()
opciones()