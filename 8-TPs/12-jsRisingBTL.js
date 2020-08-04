/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 let age = parseInt(prompt("ingrese edad entre 18 y 90 años: "));
	 let sex = prompt("Ingrese M para masculino o F para femenino").toUpperCase();
	 let status = parseInt(prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	 let statusString; 
	 let salary = parseInt(prompt("Ingrese salario bruto siendo 8.000 lo minimo"));
	 let file = parseInt(prompt("Ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda."));
	 let nacionality = prompt("Ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.").toUpperCase();
	 let nacionalityString;

	 while ( !(age >= 18 && age <= 90) ) {
		age = parseInt(prompt("Error, ingrese edad entre 18 y 90 años: "));
	 }
	 document.getElementById("txtIdEdad").value = age + " años";

	 while ( !(sex == "M" || sex == "F") ) {
		sex = prompt("Error, ingrese M para masculino o F para femenino").toUpperCase();
	 }
	 if (sex == "M") {
		document.getElementById("txtIdSexo").value = "Masculino";
	 } else {
		document.getElementById("txtIdSexo").value = "Femenino";
	 }
	 
	 while ( !(status >= 1 && status <= 4) ) {
		status = parseInt(prompt("Error, ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	 }
	 switch (status) {
		 case 1:
			statusString = "soltero";
			 break;
		 case 2:
			statusString = "casado";
			 break;
		 case 3:
			statusString = "divorciado";
			 break;
		 case 4:
			statusString = "viudo";
			 break;
	 }
	 document.getElementById("txtIdEstadoCivil").value ="Es " + statusString;

	 while (salary < 8000) {
		salary = parseInt(prompt("Error, ingrese salario bruto siendo 8.000 lo minimo"));
	 }
	 document.getElementById("txtIdSueldo").value ="$" + salary + " pesos";

	 while (!(file >= 1000 && file <= 9999)) {
		file = parseInt(prompt("Error, ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda."));
	 }
	 document.getElementById("txtIdLegajo").value ="Legajo N° " + file;

	 while ( !(nacionality == "A" || nacionality == "E" || nacionality == "N") ) {
		nacionality = prompt("Error, ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.").toUpperCase();
	 }
	 switch (status) {
		case "A":
			nacionalityString = "Argentinos";
			break;
		case "E":
			nacionalityString = "Extranjeros";
			break;
		case "N":
			nacionalityString = "Nacionalizados";
			break;
	}
	 document.getElementById("txtIdNacionalidad").value ="Es " + nacionalityString;



}
