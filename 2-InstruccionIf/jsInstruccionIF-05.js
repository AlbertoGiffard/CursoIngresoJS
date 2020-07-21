function mostrar()
{
	let age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);
	if (age < 13 || age >= 18) {
		alert("No eres un adolescente");
	}

}//FIN DE LA FUNCIÓN