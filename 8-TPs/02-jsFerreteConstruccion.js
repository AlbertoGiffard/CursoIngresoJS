/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//siempre es largo x ancho

function Rectangulo () 
{
    let height = document.getElementById("txtIdLargo").value;
    let width = document.getElementById("txtIdAncho").value;
    height = parseFloat(height);
    width = parseFloat(width);
    let perimeter = 2 * (height + width) * 3;
    alert(`se necesitan comprar: ${perimeter} de alambres.`);
}
function Circulo () 
{
    let radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    let perimeter = 2 * Math.PI * radio * 3;
    alert(`se necesitan comprar: ${perimeter.toFixed(2)} de alambres.`);
}
function Materiales () 
{
    let height = document.getElementById("txtIdLargo").value;
    let width = document.getElementById("txtIdAncho").value;
    height = parseFloat(height);
    width = parseFloat(width);
    let area = height * width;
    let cement = area * 2;
    let cal = area * 3;
    alert(`Con esas medidas se necesitaran ${cement} bolsas de cemento y ${cal} de cal.`);
}