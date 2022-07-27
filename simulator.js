let price = parseInt(prompt("Ingrese el precio del producto: "));
let fee = parseInt(prompt("Ingrese la cantidad de cuotas que desea, puede elegir entre 1, 2, 3, 6, 12, 18 o 24 pagos. "));

while (isNaN(price) == false && isNaN(fee) == false) {
    switch (fee) {
        case 1:
            console.log("Abonando en una sola cuota no hay recargo, el precio final es: $", price);
            break;
        case 3:
            console.log("Usted ingresó $", price, ". El recargo con 3 cuotas es del 25%, el precio final es: $", price * 1.25);
            break;
        case 6:
            console.log("Usted ingresó $", price, ". El recargo con 6 cuotas es del 35%, el precio final es: $", price * 1.35);
            break;
        case 12:
            console.log("Usted ingresó $", price, ". El recargo con 12 cuotas es del 30%, el precio final es: $", price * 1.30);
            break;
        case 18:
            console.log("Usted ingresó $", price, ". El recargo con 18 cuotas es del 40%, el precio final es: $", price * 1.40);
            break;
        case 24:
            console.log("Usted ingresó $", price, ". El recargo con 24 cuotas es del 50%, el precio final es: $", price * 1.50);
            break;
        default:
            console.log("No es posible operar con esa cantidad de cuotas, elija entre 1, 2, 3, 6, 12, 18 o 24 pagos.");
            break;
    }

    let again = prompt("Desea calcular otro precio? Oprima ACEPTAR, sino Escriba ESC para salir.");

    if (again.toUpperCase() == "ESC") {
        console.log("Proceso Terminado. Recargue la página si desea seguir calculando.");
        break;      
    }

    price = parseInt(prompt("Ingrese el precio del producto: "));
    fee = parseInt(prompt("ingrese la cantidad de cuotas que desea: "));
}

if (isNaN(price) == true || isNaN(fee) == true) {
    alert("Tanto el precio, como la cantidad de cuotas deben ser números enteros.");
}

alert("Bucle finalizado.");