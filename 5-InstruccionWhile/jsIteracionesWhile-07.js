/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i = 0;
	let inputSum = document.getElementById("txtIdSuma");
	let average = document.getElementById("txtIdPromedio");
	let sum = 0;
	do {
		let number = parseInt(prompt("indique un numero"));
		sum += number
		i++;
		go = confirm("Quiere volver a sumar?");
	} while (go);
	inputSum.value = sum;
	average.value = sum / i;
	

}//FIN DE LA FUNCIÓN