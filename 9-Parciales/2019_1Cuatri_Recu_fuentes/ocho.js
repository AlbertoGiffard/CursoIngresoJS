function mostrar() {
    let avg;
    let again;
    let color;
    let highestCar;
    let colorOfHighest;
    let price;
    let countRed = 0;
    let countHighestRed = 0;
    let countUnder = 0;
    let countCar = 0;
    let totalPrice = 0;
    let high = false;

    do {
        color = prompt("Indique un color entre rojo, verde o amarillo").toLowerCase();
        while (!(color == "rojo" || color == "verde" || color == "amarillo")) {
            color = prompt("Hubo un error, indique un color entre rojo, verde o amarillo").toLowerCase();
        }
        price = parseFloat(prompt("Un precio entre 0 y 10000"));
        while (!(price >= 0 && price <= 10000)) {
            price = parseFloat(prompt("Error, recuerda que debe ser un precio entre 0 y 10000"));
        }
        if (color == "rojo") {
            countRed++;
            if (price > 5000) {
                countHighestRed++;
            }
        }
        if (price < 5000) {
            countUnder++;
        }
        if (!high || highestCar < price) {
            high = true;
            highestCar = price;
            colorOfHighest = color;
        }
        countCar++;
        totalPrice += price;
        again = confirm("Quiere ingresar otro vehiculo?");
    } while (again);
    avg = totalPrice / countCar;
    console.log(`
        A. Hay ${countRed} auto/s rojo/s en total
        B. Hay ${countHighestRed} auto/s rojo/s mayor/es a 5000 en total
        C. Hay ${countUnder} auto/s menor/es a 5000 en total
        D. El promedio es de ${avg}
        E. El mas caro su valor es de ${highestCar} y su color es ${colorOfHighest}
    `);
    /* Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantida de rojos
    b) La cantidad de rojos con precio mayor a 5000
    c) La cantidad de vehiculos con precio inferior a 5000
    d) El promedio de todos los vehiculos ingresados.
    e) El mas caro y su color */
}
