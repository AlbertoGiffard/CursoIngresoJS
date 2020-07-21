function mostrar()
{
	let age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);
	if (age >= 13 && age <= 17) {
		alert("Eres un adolescente");
	}


}//FIN DE LA FUNCIÓN