/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	var numOne = document.getElementById("txtIdNumeroUno").value; 
	var numTwo = document.getElementById("txtIdNumeroDos").value; 
	numOne = parseInt(numOne);
	numTwo = parseInt(numTwo);	
	var result;
	result = numOne + numTwo;
	alert(`La suma de los numeros da: ${result}`);
}

function restar()
{
	var numOne = document.getElementById("txtIdNumeroUno").value; 
	var numTwo = document.getElementById("txtIdNumeroDos").value; 
	numOne = parseInt(numOne);
	numTwo = parseInt(numTwo);	
	var result;
	result = numOne - numTwo;
	alert(`La resta de los numeros da: ${result}`);
}

function multiplicar()
{ 
	var numOne = document.getElementById("txtIdNumeroUno").value; 
	var numTwo = document.getElementById("txtIdNumeroDos").value; 
	numOne = parseInt(numOne);
	numTwo = parseInt(numTwo);	
	var result;
	result = numOne * numTwo;
	alert(`La multiplicacion de los numeros da: ${result}`);
}

function dividir()
{
	var numOne = document.getElementById("txtIdNumeroUno").value; 
	var numTwo = document.getElementById("txtIdNumeroDos").value; 
	numOne = parseInt(numOne);
	numTwo = parseInt(numTwo);	
	var result;
	result = numOne / numTwo;
	result = parseFloat(result);
	alert(`La division de los numeros da: ${result}`);
}

