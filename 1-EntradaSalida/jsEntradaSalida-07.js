/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	let numOne = document.getElementById("txtIdNumeroUno").value; 
	let numTwo = document.getElementById("txtIdNumeroDos").value; 
	numOne = parseInt(numOne);
	numTwo = parseInt(numTwo);	
	let result;
	result = numOne + numTwo;
	alert(`La suma de los numeros da: ${result}`);
}

function restar()
{
	let numOne = document.getElementById("txtIdNumeroUno").value; 
	let numTwo = document.getElementById("txtIdNumeroDos").value; 
	numOne = parseInt(numOne);
	numTwo = parseInt(numTwo);	
	let result;
	result = numOne - numTwo;
	alert(`La resta de los numeros da: ${result}`);
}

function multiplicar()
{ 
	let numOne = document.getElementById("txtIdNumeroUno").value; 
	let numTwo = document.getElementById("txtIdNumeroDos").value; 
	numOne = parseInt(numOne);
	numTwo = parseInt(numTwo);	
	let result;
	result = numOne * numTwo;
	alert(`La multiplicacion de los numeros da: ${result}`);
}

function dividir()
{
	let numOne = document.getElementById("txtIdNumeroUno").value; 
	let numTwo = document.getElementById("txtIdNumeroDos").value; 
	numOne = parseInt(numOne);
	numTwo = parseInt(numTwo);	
	let result;
	result = numOne / numTwo;
	result = parseFloat(result);
	alert(`La division de los numeros da: ${result}`);
}

