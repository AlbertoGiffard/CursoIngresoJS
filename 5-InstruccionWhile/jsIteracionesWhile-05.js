/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sex = prompt("Ingresa el sexo con 'm' o 'f'").toLowerCase();
	while (!(sex == "f" || sex == "m")) {
		sex = prompt("Ingresa un sexo válido con 'm' o 'f'").toLowerCase();
	}
	if (sex == "f") {
		document.getElementById("txtIdSexo").value = "Femenino";
	} else {
		document.getElementById("txtIdSexo").value = "Masculino";
	}
}//FIN DE LA FUNCIÓN