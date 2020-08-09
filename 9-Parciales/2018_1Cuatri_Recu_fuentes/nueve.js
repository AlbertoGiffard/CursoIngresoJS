function mostrar() {
    /* Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
    la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de temperaturas pares.
    b) El nombre y temperatura del animal más pesado
    c) La cantidad de animales que viven a menos de 0 grados.
    d) El promedio del peso de todos los animales.
    f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero. */
    let again;
    let name;
    let weight;
    let temperature;
    let heavyName;
    let heavyTemperature;
    let heavyWeight;
    let maxWeight;
    let minWeight;
    let avgWeight = 0;
    let totalWeight = 0;
    let count = 0;
    let countPair = 0;
    let countLow = 0;
    let heavy = false;
    let max = false;
    let min = false;
    do {
        name = prompt("Ingrese el nombre");
        weight = parseFloat(prompt("Indique el peso entre 1 y 1000"));
        while (!(weight >= 1 && weight <= 1000)) {
            weight = parseFloat(prompt("Error, reindique el peso entre 1 y 1000"));
        }
        temperature = parseFloat(prompt("Indique la temperatura del hábitat del animal(entre -30 y 30)"));
        while (!(temperature >= -30 && temperature <= 30)) {
            temperature = parseFloat(prompt("Error, reindique la temperatura del hábitat del animal(entre -30 y 30)"));
        }
        if (temperature % 2 == 0) {
            countPair++;
        }
        if (!heavy || heavyWeight < weight) {
            heavy = true;
            heavyWeight = weight;
            heavyName = name;
            heavyTemperature = temperature;
        }
        if (temperature < 0) {
            countLow++;
            if (!max || maxWeight < weight) {
                max = true;
                maxWeight = weight;
            }
            if (!min || minWeight > weight) {
                min = true;
                minWeight = weight;
            }
        }
        count++;
        totalWeight += weight;
        again = confirm("Ingresar otro animal");
    } while (again);
    avgWeight = totalWeight / count;
    if (countLow == 0) {
        maxWeight = 0;
        minWeight = 0;
    }
    console.log(`a) La cantidad de temperaturas pares: ${countPair}
    b) El nombre: ${heavyName} y temperatura del animal más pesado: ${heavyTemperature}
    c) La cantidad de animales que viven a menos de 0 grados: ${countLow}
    d) El promedio del peso de todos los animales: ${avgWeight}
    f) El peso máximo: ${maxWeight} y el mínimo de todos los animales cuyas temperaturas sean bajo cero: ${minWeight}`);
}
