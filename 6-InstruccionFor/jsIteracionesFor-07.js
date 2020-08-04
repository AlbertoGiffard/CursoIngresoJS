function mostrar()
{
	let countDivide = 0;
	let number  = parseInt(prompt("Ingrese un numero:"));
	while (number <= 0 || isNaN(number)) {
		number  = parseInt(prompt("Reingrese un numero válido:"));
	}
	for(let i = 1; i <= number;i++){
		if (number % i == 0) {
			countDivide++;
			console.log(i + " número divisorio");
		}
	}
	console.log(`Se encontraron ${countDivide} números divisorios`);
}//FIN DE LA FUNCIÓN