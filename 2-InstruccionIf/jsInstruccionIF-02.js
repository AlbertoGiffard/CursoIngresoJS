function mostrar()
{
	let age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);
	if (age >= 18) {
		alert("Usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN