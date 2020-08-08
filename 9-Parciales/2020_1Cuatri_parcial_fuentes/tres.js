function mostrar()
{
	let again;
	let age;
	let maxTemperature;
	let name;
	let nameTemperature;
	let sex;
	let state;
	let temperature;
	let avg = 0;
	let countWidows = 0;
	let countMen = 0;
	let countOldPerson = 0;
	let countSingleMan = 0;
	let totalAge = 0;
	let high = false;
	do {
		name = prompt("ingrese el nombre del pasajero");
		age = parseInt(prompt("Ingrese la edad"));
		sex = prompt("Ingrese el sexo de la persona con 'm' para masculino o 'f' para femenino" ).toLowerCase();
		state = prompt("Ingrese el estado civil de la persona con 'soltero', 'casado' o 'viudo'" ).toLowerCase();
		temperature = parseFloat(prompt("Indique la temperatura corporal del pasajero, solo en número, se tomaran centrígrados"));

		if (!high || maxTemperature < temperature) {
			high = true;
			maxTemperature = temperature;
			//a) El nombre de la persona con mas temperatura.
			nameTemperature = name;
		}
		if (age >= 18 && state == "viudo") {
			//b) Cuantos mayores de edad estan viudos
			countWidows++;
		}
		if ((sex == "m" && state == "soltero") || (sex == "m" && state == "viudo")) {
			//c) La cantidad de hombres que hay solteros o viudos.
			countMen++;
		}
		if (age > 60 && temperature > 38) {
			//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
			countOldPerson++;
		}
		if (sex == "m" && state == "soltero") {
			totalAge += age;
			countSingleMan++;
		}
		again = confirm("Quiere ingresar otro pasajero?");
	} while (again);
	//e) El promedio de edad entre los hombres solteros.
	avg = totalAge / countSingleMan;

	alert("La respuesta por consola!");
	console.log(`
		A. El nombre de la persona con mas temperatura es ${nameTemperature}
		B. ${countWidows} pasajeros son mayores de edad y son viudos
		C. La cantidad de hombres que hay solteros o viudos es de ${countMen}
		D. La cantidad de personas de la tercera edad y tienen mas de 38° es/son ${countOldPerson}
		E. ${avg} es el promedio de edad entre los hombres solteros
	`);





	/* a) El nombre de la persona con mas temperatura.
		b) Cuantos mayores de edad estan viudos
		c) La cantidad de hombres que hay solteros o viudos.
		d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		e) El promedio de edad entre los hombres solteros. */
}
