function mostrar()
{
	let time = document.getElementById("txtIdEstacion").value;
	let destiny = document.getElementById("txtIdDestino").value;
	switch (time) {
		case "Invierno":
			if (destiny == "Bariloche") {
				alert("Se viaja");
			} else {
				alert("No se viaja");
			}
			break;
		case "Verano":
			if (destiny == "Cataratas" || destiny == "Mar del plata") {
				alert("Se viaja");
			} else {
				alert("No se viaja");
			}
			break;
		case "Otonio":
			alert("Se viaja");
			break;
		case "Primavera":
			if (destiny == "Bariloche") {
				alert("No se viaja");
			} else {
				alert("Se viaja");
			}
			break;
	
	}

}//FIN DE LA FUNCIÓN