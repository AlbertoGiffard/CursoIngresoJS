/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let inputSum = document.getElementById("txtIdSuma");
	let product = document.getElementById("txtIdProducto");
	let sum = 0;
	let insideNegative = false;
	let multiplicate = 1;
	let go;
	do {
		let number = parseInt(prompt("indique un numero"));
		if (number >= 0) {
			sum += number;
		} else {
			multiplicate *= number;
			insideNegative = true;
		} 
		go = confirm("Otro numero?");
	} while (go);
	if (!insideNegative) {
		multiplicate = 0;
	}
	inputSum.value = sum;
	product.value = multiplicate;


}//FIN DE LA FUNCIÓN