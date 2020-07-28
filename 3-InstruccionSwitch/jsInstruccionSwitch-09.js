function mostrar()
{
	let time = document.getElementById("txtIdEstacion").value;
	let destiny = document.getElementById("txtIdDestino").value;
	let mount = 15000;
	let newPrice;
	switch (time) {
		case "Invierno":
			if (destiny == "Bariloche") {
				newPrice= mount + (mount * .20);
				alert(`tuvo un aumento de 20%, y su total es de: $${newPrice}`);
			} else if(destiny == "Cataratas" || destiny == "Cordoba"){
				newPrice= mount - (mount * .10);
				alert(`tuvo un descuento de 10%, y su total es de: $${newPrice}`);
			} else{
				newPrice= mount - (mount * .20);
				alert(`tuvo un descuento de 20%, y su total es de: $${newPrice}`);
			}
			break;
		case "Verano":
			if (destiny == "Bariloche") {
				newPrice= mount - (mount * .20);
				alert(`tuvo un descuento de 20%, y su total es de: $${newPrice}`);
			} else if(destiny == "Cataratas" || destiny == "Cordoba"){
				newPrice= mount + (mount * .10);
				alert(`tuvo un aumento de 10%, y su total es de: $${newPrice}`);
			} else{
				newPrice= mount + (mount * .20);
				alert(`tuvo un aumento de 20%, y su total es de: $${newPrice}`);
			}
			break;
		case "Otonio":
		case "Primavera":
			if (destiny == "Bariloche") {
				newPrice= mount + (mount * .10);
				alert(`tuvo un aumento de 10%, y su total es de: $${newPrice}`);
			} else if(destiny == "Cataratas" || destiny == "Mar del plata"){
				newPrice= mount + (mount * .10);
				alert(`tuvo un aumento de 10%, y su total es de: $${newPrice}`);
			} else{
				alert(`no tuvo ninguna variación, y su total es de: $${mount}`);
			}
			break;
	
	}

}//FIN DE LA FUNCIÓN