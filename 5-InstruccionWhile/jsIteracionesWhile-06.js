function mostrar()
{
	let i = 0;
	let sum = document.getElementById("txtIdSuma");
	let average = document.getElementById("txtIdPromedio");
	let acumulate = 0;
	while (i < 5){
		let number = prompt("Ingrese un numero");
		number = parseInt(number);
		//luego verificamos esto 
		/* while( typeof number == NaN ){
			alert("recuerda que es un numero");
			number = prompt("Ingrese nuevamente un numero");
			number = parseInt(number);
		} */
		acumulate += number;
		i++;
	}
	sum.value = acumulate;
	average.value = acumulate / 5;
}//FIN DE LA FUNCIÓN