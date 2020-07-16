/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let money = document.getElementById("txtIdImporte").value;
	money = parseFloat(money);
	let discount = money - (money * 0.25); 
	document.getElementById("txtIdResultado").value = discount;
}
