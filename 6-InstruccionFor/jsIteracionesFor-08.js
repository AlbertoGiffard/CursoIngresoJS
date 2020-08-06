function mostrar()
{
	let number;
	let flag = false;
	let message = " es primo";

	number = parseInt(prompt("Indique numero, para saber si es primo"));

	while (isNaN(number)) {
		number = parseInt(prompt("Eso no es un numero, ingrese un número"));
	}

	for(let i = 2; i < number; i++){
		if (!(number % i)) {
			flag = true;
			break;
		}
	}

	if (flag || number <= 1) {
		message = " no" + message;
	}

	alert(number + message);



	/* while (number < 2 || isNaN(number)) {
		number = parseInt(prompt("Error, vuelve a ingresar un número para saber si es primo, recuerda que no es valido 0 ó 1 o negativos"));
	}

	for(let i = 1;i <= number; i++){
		if (number % i == 0) {
			count++;
		}
	}
	if (count == 2) {
		alert(number + " es primo")
	} else {
		alert(number + " no lo es")
	} */
}//FIN DE LA FUNCIÓN