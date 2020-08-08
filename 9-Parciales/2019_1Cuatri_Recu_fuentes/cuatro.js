function mostrar()
{
    let num1;
    let num2;
    let squared;
    let subtract;
    let remainder;
    
    num1 = parseInt(prompt("Ingrese el primer número"));
    while (isNaN(num1)) {
        num1 = parseInt(prompt("Error, reingrese el primer número")); 
    }
    num2 = parseInt(prompt("Ingrese el segundo número"));
    while (isNaN(num2)) {
        num1 = parseInt(prompt("Error, reingrese el segundo número")); 
    }
    if (num1 == num2) {
        squared = num1 * num1;
        console.log("cuadrado " + squared);
    }
    if(num1 % num2 == 0){
        subtract = num1 - num2;
        console.log("resta " + subtract);
    } else{
        remainder = num1 % num2;
        if (remainder > 3) {
            alert("el resto es mayor a 3");
        }
        console.log("el resto es de " + remainder);
    }
    /* Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert. */
}
