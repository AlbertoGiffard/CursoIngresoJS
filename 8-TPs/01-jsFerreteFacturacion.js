/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let priceOne = document.getElementById("txtIdPrecioUno").value;
    let priceTwo = document.getElementById("txtIdPrecioDos").value;
    let priceThree = document.getElementById("txtIdPrecioTres").value;
    priceOne = parseFloat(priceOne);
    priceTwo = parseFloat(priceTwo);
    priceThree = parseFloat(priceThree);
    let result = priceOne + priceTwo + priceThree;
    alert("La suma es: " + result.toFixed(2));
}
function Promedio () 
{
    let priceOne = document.getElementById("txtIdPrecioUno").value;
    let priceTwo = document.getElementById("txtIdPrecioDos").value;
    let priceThree = document.getElementById("txtIdPrecioTres").value;
    priceOne = parseFloat(priceOne);
    priceTwo = parseFloat(priceTwo);
    priceThree = parseFloat(priceThree);
    let result = (priceOne + priceTwo + priceThree) / 3;
    alert("El promedio es: " + result.toFixed(2));
}
function PrecioFinal () 
{
    let priceOne = document.getElementById("txtIdPrecioUno").value;
    let priceTwo = document.getElementById("txtIdPrecioDos").value;
    let priceThree = document.getElementById("txtIdPrecioTres").value;
    priceOne = parseFloat(priceOne);
    priceTwo = parseFloat(priceTwo);
    priceThree = parseFloat(priceThree);
    let result = priceOne + priceTwo + priceThree;
    let withIva = result + (result * .21);
    alert("El precio final es: " + withIva.toFixed(2));
}