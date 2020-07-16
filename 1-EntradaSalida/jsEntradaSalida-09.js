/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let salary = document.getElementById("txtIdSueldo").value;
	salary = parseFloat(salary);
	let updateSalary = (salary * 0.1) + salary; 
	document.getElementById("txtIdResultado").value = updateSalary;

	/* si coloco .toFixed y entre parentesis le coloco cuantos decimales quiero colocar */
	/* Math.ceil(8.1) = redondea al entero mas cercano es decir esto da 9
	Math.floor(8.9) = redondea hacia abajo al entero mas cercano es decir esto da 8 */
	/* Math.round() redondea el valor */
}
