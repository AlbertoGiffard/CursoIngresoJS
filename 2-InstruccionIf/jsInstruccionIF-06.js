function mostrar()
{
	let age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);
	if (age >= 18) {
		alert("Eres mayor de edad")
	} else if (age >= 13 && age <= 17) {
		alert("Eres Adolescente")
	}else{
		alert("Eres un niño")
	}



}//FIN DE LA FUNCIÓN