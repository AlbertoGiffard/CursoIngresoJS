/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let name = document.getElementById("txtIdNombre").value;
	let age = document.getElementById("txtIdEdad").value;
	alert(`Usted se llama ${name} y tiene ${age} años.`);
}

