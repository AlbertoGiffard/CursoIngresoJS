function mostrar() {
    /* (SWITCH)pedir el ingreso de un día de la semana,
    si es fin de semana mostrar " buen finde",
    si es día hábil “ a trabajar”,
    si no es un día valido, también informarlo,
    usar una sola ventana alert. */
    let day;
    let message;

    day = prompt("Ingrese un día de la semana").toLowerCase();
    switch (day) {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            message = "A trabajar";
            break;
        case "sabado":
        case "domingo":
            message = "buen finde";
            break;
    
        default:
            message = "No es un día válido";
            break;
    }
    alert(message);
}
