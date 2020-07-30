/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let inputMax = document.getElementById("txtIdMaximo");
	let inputMin = document.getElementById("txtIdMinimo");
	let max;
	let min;
	let inside = true;
	let go;
	do {
		let number = parseInt(prompt("indique un numero"));
		if (inside || max <= number) {
			max = number;
		}
		if (inside || min >= number) {
			min = number;
			inside = false;
		} 
		go = confirm("Otro numero?");
	} while (go);
	inputMax.value = max;
	inputMin.value = min;
}//FIN DE LA FUNCIÓN