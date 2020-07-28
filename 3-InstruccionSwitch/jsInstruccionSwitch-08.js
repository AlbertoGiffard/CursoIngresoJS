function mostrar()
{
	let destiny = document.getElementById("txtIdDestino").value;
	switch (destiny) {
		case "Bariloche":
		case "Ushuaia":
			alert("Acá hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Acá hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN