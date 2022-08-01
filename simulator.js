// ----------------------------------------------------- FUNCIONES

/* La funcion validarInt() siempre va a devolver false porque la entrada es mediante prompt(),
si o si hay que convertir el input con paseInt(), por eso digo que es redundante, en la funcion 
userInput() al principio guardaba en la variable "dato" el prompt() con la entrada, ahi implemente
el parseInt() para que pueda utilizarse la funcion validarInt(). La sigo usando para que en el while pueda
escribir la condicion de una manera mas simple. */

// Despues hice una funcion para tirar los console.log() y la funcion que tira el alert() y el console.log() final.

function userInput(msg) {
    let dato = parseInt(prompt(msg)); 
    return validarInt(dato)
}

function validarInt (num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        return false;
    }
}

function endAlert() {
    alert("Bucle finalizado.");
    showConLog("Si desea seguir calculando, recargue la página.");
}

function showConLog(result) {
    console.log(result)
}

// ---------------------------------------------- DECLARACION VARIABLES

let price = userInput("Ingrese el precio del producto: ");
let fee = userInput("Ingrese la cantidad de cuotas que desea, puede elegir entre 1, 3, 6, 12, 18 o 24 pagos. ");

// ---------------------------------------------- LOOP

while (price !== false && fee !== false) {
    switch (fee) {
        case 1:
            showConLog("Abonando en una sola cuota no hay recargo, el precio final es: $" + price);
            break;
        case 3:
            showConLog("Usted ingresó $" + price + ". El recargo con 3 cuotas es del 25%, el precio final es: $" + price * 1.25);
            break;
        case 6:
            showConLog("Usted ingresó $" + price + ". El recargo con 6 cuotas es del 35%, el precio final es: $" + price * 1.35);
            break;
        case 12:
            showConLog("Usted ingresó $" + price + ". El recargo con 12 cuotas es del 30%, el precio final es: $" + price * 1.30);
            break;
        case 18:
            showConLog("Usted ingresó $" + price + ". El recargo con 18 cuotas es del 40%, el precio final es: $" + price * 1.40);
            break;
        case 24:
            showConLog("Usted ingresó $" + price + ". El recargo con 24 cuotas es del 50%, el precio final es: $" + price * 1.50);
            break;
        default:
            showConLog("No es posible operar con esa cantidad de cuotas, elija entre 1, 2, 3, 6, 12, 18 o 24 pagos.");
            break;
    }

    let again = prompt("Desea calcular otro precio? Oprima ACEPTAR, sino Escriba ESC para salir.");

    if (again.toUpperCase() == "ESC") {
        showConLog("Proceso Terminado.");
        break;      
    }

    price = userInput("Ingrese el precio del producto: ");
    fee = userInput("ingrese la cantidad de cuotas que desea: ");
}

// ---------------------------- VALIDAR SI ALGUNA DE LAS ENTRADAS NO ES UN NUMERO

if (price == false || fee == false) {
    alert("Tanto el precio, como la cantidad de cuotas deben ser números enteros.");
}

endAlert();
