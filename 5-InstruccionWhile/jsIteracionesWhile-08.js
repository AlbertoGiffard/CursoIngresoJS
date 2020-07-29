/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let inputSum = document.getElementById("txtIdSuma");
	let product = document.getElementById("txtIdProducto");
	let sum = 0;
	let multiplicate = 1;
	do {
		let number = parseInt(prompt("indique un numero"));
		if (number >= 0) {
			sum += number;
		} else {
			multiplicate *= number;
		} 
		go = confirm("Otro numero?");
	} while (go);
	inputSum.value = sum;
	product.value = multiplicate;

}//FIN DE LA FUNCIÓN