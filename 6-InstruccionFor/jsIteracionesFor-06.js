function mostrar()
{
	let countPair = 0;
	let number  = parseInt(prompt("Ingrese un numero:"));
	while (number <= 0 || isNaN(number)) {
		number  = parseInt(prompt("Reingrese un numero válido:"));
	}
	for(let i = 1; i <= number;i++){
		if (i % 2 == 0) {
			countPair++;
			console.log(i + " número par");
		}
	}
	console.log(`Se encontraron ${countPair} números pares`);
}//FIN DE LA FUNCIÓN