function mostrar()
{
    let continent = document.getElementById("selecContinente").value;
    let payment = document.getElementById("selecPago").value;
    let perDay = 100;
    let discount;
    let increment = false;
    let increase;
    let total;
    let message;
    
    switch (continent) {
        case "America":
            discount = .15;
            if (payment == "Débito") {
                discount = .25; 
            }
            break;
        case "África":
        case "Oceania":
            discount = .30;
            if (payment == "MercadoPago" || payment == "Efectivo") {
                discount = .45; 
            }
            break;
        case "Europa":
            if (payment == "Débito") {
                discount = .35;
            } else if(payment == "MercadoPago"){
                discount = .30;
            }else{
                discount = .25;
            }
            break;
        default:
            increment = true;
            increase = .20;
            if (payment == "Cheque") {
                increase = .35;
            }
            break;
    }
    if (increment) {
        total = perDay + perDay * increase;
        message = "aumento";
    } else {
        total = perDay - perDay * discount;
        message = "descuento";
    }
    console.log(`Tuvo un ${message} quedando el precio en ${total}`);
    

}
