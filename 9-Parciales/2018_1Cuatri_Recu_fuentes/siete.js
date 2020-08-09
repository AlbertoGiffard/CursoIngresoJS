function mostrar() {
    /* Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
    a) El promedio de las notas totales.
    b) La nota más baja y el sexo de esa persona.
    c) La cantidad de varones que su nota haya sido mayor o igual a 6. */
    let avg;
    let lowestNote;
    let lowestSex;
    let note;
    let sex;
    let countMan = 0;
    let i = 0;
    let totalNote = 0;
    let lowest = false;
    for(;i < 5;i++){
        note = parseInt(prompt("Cual fue la nota del alumno entre 0 y 10?"));
        while (!(note >= 0 && note <= 10)) {
            note = parseInt(prompt("Ingrese una nota válida del alumno entre 0 y 10?"));
        }
        sex = prompt("El sexo del alumno 'f' para femenino o 'm' para masculino").toLowerCase();
        while (!(sex == "f" || sex == "m")) {
            sex = prompt("El sexo del alumno debe ser 'f' para femenino o 'm' para masculino").toLowerCase();
        }
        if (!lowest || lowestNote > note) {
            lowest = true;
            lowestNote = note;
            lowestSex = sex;
        }
        if (sex == "m" && note >= 6) {
            countMan++;
        }
        totalNote += note;
    }
    avg = totalNote / i;
    console.log(`
        a) El promedio de las notas totales: ${avg}
        b) La nota más baja: ${lowestNote} y el sexo de esa persona: ${lowestSex}
        c) La cantidad de varones que su nota haya sido mayor o igual a 6: ${countMan}
    `);
}
