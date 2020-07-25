/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let price = 35;
    let amount = document.getElementById("txtIdCantidad").value;
    amount = parseInt(amount);
    let brand = document.getElementById("Marca").value;
    let discount = document.getElementById("txtIdprecioDescuento");
    let finalPrice;
    if (amount >= 6) {
        price = price - (price * .50) ;
        
        discount.value = `Descuento de 50%: $${price}`;
    }else{
        switch (amount) {
            case 5:
                if (brand == "ArgentinaLuz") {
                    price = price - (price * .40) ;
                    discount.value = `Descuento de 40%: $${price}`;
                    
                } else{
                    price = price - (price * .30) ;
                    discount.value = `Descuento de 30%: $${price}`;
                    
                }
                break;
            case 4:
                if (brand == "ArgentinaLuz" || brand == "FelipeLamparas") {
                    price = price - (price * .25) ;
                    discount.value = `Descuento de 25%: $${price}`;
                    
                } else{
                    price = price - (price * .20) ;
                    discount.value = `Descuento de 20%: $${price}`;
                    
                }
                break;
            case 3:
                if (brand == "ArgentinaLuz") {
                    price = price - (price * .15) ;
                    discount.value = `Descuento de 15%: $${price}`;
                    
                } else if(brand == "FelipeLamparas"){
                    price = price - (price * .10) ;
                    discount.value = `Descuento de 10%: $${price}`;
                    
                } else{
                    price = price - (price * .05) ;
                    discount.value = `Descuento de 5%: $${price}`;    
                }
                break;
               
        
            default:
                discount.value = `Sin Descuento: $${price}`;
                break;
        }
    }
    finalPrice = amount * price;
    if (finalPrice > 120) {
        alert(`Usted pago ${finalPrice * .10} de IIBB, y el monto final es: ${finalPrice + finalPrice * .10}`)
    } else{
        alert(`Debe pagar ${finalPrice}`);
    }  
}
