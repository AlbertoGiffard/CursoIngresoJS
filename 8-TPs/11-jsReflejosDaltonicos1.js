/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
let randomColor;
let timer = 0;
let time;
function comenzar()
{

    randomColor = Math.round(Math.random() * 5 + 1);
    switch (randomColor) {
        case 6:
            randomColor = "azul";
            break;
        case 5:
            randomColor = "amarillo";
            break;
        case 4:
            randomColor = "marron";
            break;
        case 3:
            randomColor = "verde";
            break;
        case 2:
            randomColor = "celeste";
            break;
    
        default:
            randomColor = "rojo";
            break;
    }
    time = setInterval(() =>{
        timer++;
        console.log(`llevas ${timer} segundos`);
    },1000);
    document.getElementById("txtIdColorElegido").value = randomColor;
}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	if (colorParametro == randomColor) {
        console.log(`Genial, ganaste! te tomo ${timer} segundos`);
        clearInterval(time);
    } else {
        console.log("quizas eres daltonico");
        clearInterval(time);
    }
	


}//FIN DE LA FUNCIÓN
