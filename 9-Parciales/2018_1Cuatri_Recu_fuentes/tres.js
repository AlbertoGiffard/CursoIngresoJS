function mostrar() {
    /* Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. */
    let price;
    let discount;
    let total;
    price = parseFloat(prompt("Ingrese el precio"));
    while (!(price > 0)) {
        price = parseFloat(prompt("Ingrese el precio nuevamente, apartir de uno"));
    }
    discount = parseInt(prompt("De cuanto quiere el descuento"));
    while (!(discount >= 0 && discount <= 100)) {
        discount = parseInt(prompt("Ingrese el descuento nuevamente"));
    }
    total = price - price * discount / 100;
    document.getElementById("elPrecioFinal").value = total;
}
