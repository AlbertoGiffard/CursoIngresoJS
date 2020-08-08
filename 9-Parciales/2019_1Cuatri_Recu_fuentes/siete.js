function mostrar()
{
    let avgMeat;
    let avgKg;
    let flavor;
    let kg;
    let lightFlavor;
    let minKg;
    let countMeat = 0;
    let i = 0;
    let kgMeat = 0;
    let totalKg = 0;
    let light = false;

    for (; i < 10; i++) {
        kg = parseFloat(prompt("¿Cuantos kilos? recuerda que debe ser entre 0 y 500"));
        while (!(kg >= 0 && kg <= 500)) {
            kg = parseFloat(prompt("Hubo un error, recuerda que debe ser entre 0 y 500"));
        }
        totalKg += kg;

        flavor = prompt("indique el sabor entre 'carne', 'vegetales' o 'pollo'").toLowerCase();
        while (!(flavor == "carne" || flavor == "vegetales" || flavor == "pollo")) {
            flavor = prompt("Error, reingrese el sabor entre 'carne', 'vegetales' o 'pollo'").toLowerCase();
        }
        if (!light || minKg > kg) {
            light = true;
            minKg = kg;
            lightFlavor = flavor;
        }
        if (flavor == "carne") {
            countMeat++;
            kgMeat += kg;
        }
    }
    avgKg = totalKg / i;
    if (countMeat >= 1) {
        avgMeat = kgMeat / countMeat;
    } else {
        avgMeat = 0;
    }
    
    alert("respuesta por consola!");
    console.log(`
        A. El promedio de los kilos totales es de ${avgKg}
        B. El mas liviano es de ${minKg}kg. y su sabor es de ${lightFlavor}
        C. La cantidad de carne es de ${countMeat} y su promedio es de ${avgMeat}
    `);
    // pedir 10 veces por prompt
    // kilos(validar entre 0 y 500)
    // sabor (validar carne, vegetales o pollo)
/* Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne */
}
