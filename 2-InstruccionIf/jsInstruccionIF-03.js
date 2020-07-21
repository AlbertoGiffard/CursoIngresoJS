function mostrar()
{
	let age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);
	/* if (age >= 18) {
		alert("Usted es mayor de edad");
	} else{
		alert("Aún es menor de edad");
	} */
	(age >= 18) ? alert("Usted es mayor de edad") : alert("Aún es menor de edad");

}//FIN DE LA FUNCIÓN