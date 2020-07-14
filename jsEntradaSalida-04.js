/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var name = prompt("escriba su nombre");
	var inputName = document.getElementById("txtIdNombre");
	inputName.value = name;
}

