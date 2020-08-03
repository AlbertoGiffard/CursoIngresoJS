/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
 var randomOne;
 var randomTwo;
 var randomSign;
 var operation;
 var timer = 0;

function comenzar()
{
    
    setInterval(function(){
        timer+=1;
        if (timer <= 4) {
            console.log(timer);
        }
    },1000);
    setInterval(function(){
        if (document.getElementById("txtIdRespuesta").value == operation) {
            console.log("you win!");
        } else {
            console.log("next time");
        }
    },4000);
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
	
    if (document.getElementById("txtIdRespuesta").value == operation) {
        console.log("you win!");
    } else {
        console.log("next time");
    }

}//FIN DE LA FUNCIÓN
