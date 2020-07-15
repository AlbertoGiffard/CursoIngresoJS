/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let nameOne = document.getElementById("txtIdNumeroUno").value;
	let nameTwo = document.getElementById("txtIdNumeroDos").value;
	let resultado = parseInt(nameOne) + parseInt(nameTwo);
	alert("La suma es: " + resultado);
	
}

