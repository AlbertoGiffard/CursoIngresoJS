function mostrar()
{
	let destiny = document.getElementById("txtIdDestino").value;
	// con switch
	switch (destiny) {
		case "Bariloche":
			alert("Estamos en el punto cardenal Oeste");
			break;
		case "Cataratas":
			alert("Estamos en el punto cardenal Norte");
			break;
		case "Mar del plata":
			alert("Estamos en el punto cardenal Este");
			break;
		case "Ushuaia":
			alert("Estamos en el punto cardenal Sur");
			break;
	}

}//FIN DE LA FUNCIÓN