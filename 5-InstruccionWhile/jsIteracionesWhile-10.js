/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar() {
  let totalNegatives = 0;
  let countNegatives = 0;
  let totalPositives = 0;
  let countPositives = 0;
  let countOfZero = 0;
  let pair = 0;
  let avgPositive = 0;
  let avgNegative = 0;
  let total = 0;
  let again;
  let number;
  do {
    number = parseInt(prompt("Indique un número"));
    if (number % 2 == 0) {
      pair++;
    }
    if (number >= 1) {
      countPositives++;
      totalPositives += number;
    } else if (number == 0) {
      countOfZero++;
    } else {
      countNegatives++;
      totalNegatives += number;
    }
    again = confirm("Otro numero?");
  } while (again);

  if (countPositives >= 1) {
	  //aca podria ir un math.round para redondear si da decimales
	  avgPositive = totalPositives / countPositives;  
  }
  if (countNegatives >= 1) {
	  //aca podria ir un math.round para redondear si da decimales
	  avgNegative =  totalNegatives / countNegatives;
  }
  total = totalPositives + totalNegatives;

  console.log(`
	1-Suma de los negativos: ${totalNegatives} 
	2-Suma de los positivos. ${totalPositives} 
	3-Cantidad de positivos. ${countPositives} 
	4-Cantidad de negativos. ${countNegatives} 
	5-Cantidad de ceros. ${countOfZero} 
	6-Cantidad de números pares. ${pair} 
	7-Promedio de positivos. ${avgPositive} 
	8-Promedios de negativos. ${avgNegative} 
	9-Diferencia entre positivos y negativos. ${total}
	`);
} //FIN DE LA FUNCIÓN
