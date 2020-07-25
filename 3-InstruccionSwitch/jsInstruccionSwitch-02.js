function mostrar()
{
	let month = document.getElementById("txtIdMes").value;
	switch (month) {
		case "Julio":
			alert("Abrigate que hace frio.")
			break;

		case "Agosto":
			alert("Abrigate que hace frio.")
			break;
		
		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!.")
			break;

		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!.")
			break;

		case "Noviembre":
			alert("Ya pasamos el frio, ahora calor!!!.")
			break;

		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.")
			break;
	
		default:
			alert("Falta para el invierno.")
			break;
	}
	/* puedo agrupar case en switch juntandolos, y pasar lo que se debe realizar en el ultimo case, ejemplo:

	case 1:
	case 2:
		alert(x);
		// aqui iria el break, para que salte al siguiente 
		break; */




}//FIN DE LA FUNCIÓN