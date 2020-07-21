function mostrar()
{
	
	let age = document.getElementById("txtIdEdad").value;
	let state = document.getElementById("estadoCivil").value;

	if (age < 18 && !(state == "Soltero")) {
		alert("Es muy pequeño para NO ser soltero.");
	}
	


}//FIN DE LA FUNCIÓN