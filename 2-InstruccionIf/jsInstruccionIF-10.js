function mostrar()
{
	const max = 10;
	const min = 1;
	let number = Math.round(Math.random() * (max - min) + min);
	alert(number);
	if (number <= 3) {
		alert("Vamos, la proxima se puede");
	} else if (number >= 9) {
		alert("Excelente");
	} else {
		alert("Aprobó");
	}

}