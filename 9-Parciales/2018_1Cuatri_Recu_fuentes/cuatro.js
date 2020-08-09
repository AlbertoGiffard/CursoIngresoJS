function mostrar() {
    /* (IF)Pedir dos números y mostrar el resultado:
    Si son iguales los muestro concatenados.
    Si el primero es mayor, los divido,
    de lo contrario los sumo.
    Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
    "la suma es xxx y es menor a 50". */
    let num1;
    let num2;
    let concat;
    let divide;
    let sum;

    num1 = parseInt(prompt("Ingrese el primer número"));
    while (isNaN(num1)) {
        num1 = parseInt(prompt("Error, reingrese el primer número"));
    }
    num2 = parseInt(prompt("Ingrese el segundo número"));
    while (isNaN(num2)) {
        num2 = parseInt(prompt("Error, reingrese el segundo número"));
    }
    concat = num1 + "" + num2;
    divide = num1 / num2;
    sum = num1 + num2;
    if (num1 == num2) {
        console.log(concat);
    }else if(num1 > num2){
        console.log("dividido " + divide);
    }else{
        console.log("los sumo " + sum);
        if (sum < 50) {
            console.log("la suma es " + sum + " y es menor a 50");
        }
    }
}
