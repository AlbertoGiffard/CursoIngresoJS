function mostrar() {
    /* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de números pares.
    b) La cantidad de números impares.
    c) La cantidad de ceros.
    d) El promedio de todos los números positivos ingresados.
    e) La suma de todos los números negativos.
    f) El número y la letra del máximo y el mínimo.
    
    Testeo con los siguientes datos
    ( d , -150(mal) , -50(bien))
    ( z , 0)
    ( g , 20)
    ( a , 150(mal) , 0(bien))
    ( b , 3)
    ( k , 7) */
    let again;
    let avgPositive;
    let highestNumber;
    let highestLetter;
    let letter;
    let lowestNumber;
    let lowestLetter;
    let number;
    let countPair = 0;
    let countPositive = 0;
    let countUnpair = 0;
    let countZero = 0;
    let sumNegative = 0;
    let totalPositive = 0;
    let high = false;
    let low = false;
    do {
        letter = prompt("Ingrese cualquier letra");
        while (!(letter.length == 1)) {
            letter = prompt("Error, reingrese cualquier letra");
        }
        number = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while (!(number >= -100 && number <= 100)) {
            number = parseInt(prompt("Error, reingrese un numero entre -100 y 100"));
        }
        if (number % 2 == 0) {
            countPair++;
        } else if (number % 3 == 0) {
            countUnpair++;
        }
        if (number == 0) {
            countZero++;
        }
        if (number >= 0) {
            countPositive++;
            totalPositive += number;
        } else {
            sumNegative += number;
        }
        if (!high || highestNumber < number) {
            high = true;
            highestNumber = number;
            highestLetter = letter;
        }
        if (!low || lowestNumber > number) {
            low = true;
            lowestNumber = number;
            lowestLetter = letter;
        }
        again = confirm("Ingresar otro dato");
    } while (again);
    avgPositive = totalPositive / countPositive;
    if (isNaN(avgPositive)) {
        avgPositive = 0; 
    }
    alert("La respuesta por consola!");
    console.log(`
        a) La cantidad de números pares: ${countPair}
        b) La cantidad de números impares: ${countUnpair}
        c) La cantidad de ceros: ${countZero}
        d) El promedio de todos los números positivos ingresados: ${avgPositive}
        e) La suma de todos los números negativos: ${sumNegative}
        f) El número y la letra del máximo: ${highestNumber} ${highestLetter}
        g) El número y la letra del mínimo: ${lowestNumber} ${lowestLetter}
    `);
}
