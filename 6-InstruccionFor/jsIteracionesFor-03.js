function mostrar()
{

	let number = parseInt(prompt("indique cuantas veces quiere ver el mensaje"));
	while (number < 1 || isNaN(number)) {
		number = parseInt(prompt("Indique numero valido a partir de 1"));
	}
	for (let i = 1; i <= number ; i++) {
		console.log(i + " Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN