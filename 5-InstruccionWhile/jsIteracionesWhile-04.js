/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let input = document.getElementById("txtIdNumero");
	number = prompt("ingrese un número entre 0 y 10.");
	number = parseInt(number);
	while (!(number > 0 && number <= 9)) {
		number = prompt("ingrese un número entre 0 y 10.");
		number = parseInt(number);
	}
	input.value = number;

	
}//FIN DE LA FUNCIÓN