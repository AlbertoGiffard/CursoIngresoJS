function mostrar()
{
    let avgMinor = 0;
    let avgTeens = 0;
    let avgAdult = 0;
    let avgMan = 0;
    let avgWomen = 0;
    let again;
    let name;
    let age;
    let sex;
    let note;
    let countMan = 0;
    let minorOfAge = 0;
    let notesOfMinor = 0;
    let teens = 0;
    let notesOfTeens = 0;
    let adults = 0;
    let notesOfAdults = 0;
    let man = 0;
    let notesMan = 0;
    let women = 0;
    let notesWomen = 0;
    do {
        name = prompt("Nombre de alumno");
        age = parseInt(prompt("La edad del alumno"));
        while (!(age >= 1 && age <= 150)) {
            age = parseInt(prompt("Debe ingresar una edad válida para un alumno")); 
        }
        sex = prompt("Ingrese el sexo de la persona con 'm' para masculino o 'f' para femenino" ).toLowerCase();
        while (!(sex == "m" || sex == "f")) {
            sex = prompt("Error, reingrese el sexo de la persona con 'm' para masculino o 'f' para femenino" ).toLowerCase();
        }
        note = parseInt(prompt("La nota del alumno"));
        while (!(note >= 0 && note <= 10)) {
            note = parseInt(prompt("Debe ingresar una nota válida para el alumno")); 
        }
        if (sex == "m" && note >= 4) {
            countMan++;
        }
        if (age >= 18) {
            adults++;
            notesOfAdults += note;
        } else{
            minorOfAge++;
            notesOfMinor += note;
            if(age >= 14 && age <= 17){
                teens++;
                notesOfTeens += note;
            }
        }
        if (sex == "m") {
            man++;
            notesMan += note;
        } else {
            women++;
            notesWomen += note;
        }
        again = confirm("Quiere ingresar otro alummno?");
    } while (again);
    avgMinor = notesOfMinor / minorOfAge;
    avgTeens = notesOfTeens / teens;
    avgAdult = notesOfAdults / adults;
    avgMan = notesMan / man;
    avgWomen = notesWomen / women;
    if (isNaN(avgMinor)) {
        avgMinor = 0;
    } 
    if (isNaN(avgTeens)) {
        avgTeens = 0;
    }
    if (isNaN(avgAdult)) {
        avgAdult = 0;
    }
    if (isNaN(avgMan)) {
        avgMan = 0;
    }
    if (isNaN(avgWomen)) {
        avgWomen = 0;
    }
    console.log(`
        a) La cantidad de varones aprobados : ${countMan}
        b) El promedio de notas de los menores de edad: ${avgMinor}
        c) El promedio de notas de los adolescentes: ${avgTeens}
        d) El promedio de notas de los mayores: ${avgAdult}
        f) El promedio de notas por sexo masculino y femenino: ${avgMan} masculino y ${avgWomen} de los femeninos
    `);
/* Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino */
}
