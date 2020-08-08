function mostrar()
{
  let again;
  let type;
  let count;
  let price;
  let highestType;
  let highestPrice;
  let highestCount;
  let discount = 0;
  let total = 0;
  let totalWithDiscount = 0;
  let totalSand = 0;
  let totalCal = 0;
  let totalCement = 0;
  let totalCount = 0;
  let firstType = false;
  let less = "0%";

  do {
    type = prompt("Ingrese un tipo válido: 'arena', 'cal' o 'cemento'");
    while (!(type == "arena" || type == "cal" || type == "cemento")) {
      type = prompt("Hubo un error, reingrese un tipo válido: 'arena', 'cal' o 'cemento'");
    }

    count = parseInt(prompt("¿Cantidad de bolsas?"));
    if (type == "arena") {
      totalSand += count;
      totalCount += totalSand;
    } else if(type == "cal"){
      totalCal += count;
      totalCount += totalCal;
    } else{
      totalCement += count;
      totalCount += totalCement;
    }

    price = parseFloat(prompt("¿precio por bolsa?"));
    while (price <= 0) {
      price = parseFloat(prompt("El precio no puede ser igual o menor a 0"));
    }
    
    if (!firstType || highestPrice < price) {
      firstType = true;
      highestPrice = price;
      //d. el tipo mas caro
      highestType = type;
    }
    total = total + price * count;
    again = confirm("Quiere ingresar otro tipo?");
  } while (again);
  //si compro mas de 10 bolsas tiene 15% de descuento del total
  //si comrpo mas de 30 bolsas tiene 25% de descuento del total
  if (totalCount > 30) {
    discount = total * 0.25;
    less = "25%"; 
  } else if(totalCount > 10){
    discount = total * 0.15;
    less = "15%";
  } 

  totalWithDiscount = total - discount;

  if (totalSand > totalCal && totalSand > totalCement) {
    highestCount = "Arena";
  } else if( totalCal >= totalSand && totalCal > totalCement){
    highestCount = "Cal";
  } else{
    highestCount = "Cemento";
  }

  alert("La respuesta esta por consola!");
  console.log(`
    A. El importe total sin descuento es de ${total}
    B. Tuvo un descuento de ${less} quedando un total de ${totalWithDiscount}
    C. El tipo con mas cantidad de bolsas es ${highestCount}
    D. El tipo mas caro es ${highestType}
  `);


 //a. el importe total sin descuento
 //b. importe total con descuento si corresponde
 //c. informar el tipo con mas cantidad de bolsas
}
