/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let input = document.getElementById("txtIdNumero");
	number = parseInt(prompt("ingrese un número entre 0 y 9."));
	while (!(number >= 0 && number <= 9)) {
		number = parseInt(prompt("numero invalido, reingresa el número"));
	}
	input.value = number;

	
}//FIN DE LA FUNCIÓN