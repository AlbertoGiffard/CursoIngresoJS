/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var randomOne;
var randomTwo;
var randomSign;
var operation;

function comenzar()
{
    randomOne = Math.round(Math.random() * 9 + 1);
    randomTwo = Math.round(Math.random() * 9 + 1);
    randomSign = Math.round(Math.random() * 3 + 1);
    switch (randomSign) {
        case 4:
            document.getElementById("txtIdOperador").value = "+";
            operation = randomOne + randomTwo;
            break;
        case 3:
            document.getElementById("txtIdOperador").value = "-";
            operation = randomOne - randomTwo;
            break;
        case 2:
            document.getElementById("txtIdOperador").value = "*";
            operation = randomOne * randomTwo;
            break;
        default:
            document.getElementById("txtIdOperador").value = "/";
            operation = randomOne / randomTwo;
            break;
    }
    document.getElementById("txtIdPrimerNumero").value = randomOne;
    document.getElementById("txtIdSegundoNumero").value = randomTwo;
    console.log(operation);

}//FIN DE LA FUNCIÓN
function Responder()
{
    let result = document.getElementById("txtIdRespuesta").value;
    if (result == operation) {
        console.log("you win!");
    } else {
        console.log("next time");
    }

}//FIN DE LA FUNCIÓN
