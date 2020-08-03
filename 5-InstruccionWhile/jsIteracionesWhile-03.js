/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let password = prompt("ingrese el número clave.");
	while (password != "utn750") {
		password = prompt("esta mal, vuelve a intentarlo.");
	}
	alert("Esa es!");
}//FIN DE LA FUNCIÓN
