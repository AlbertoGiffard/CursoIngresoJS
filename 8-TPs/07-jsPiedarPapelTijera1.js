/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

let numRandom;
let rock;
let paper;
let scissors;
let win = "hey! ganaste";
let draw = "empataste";
let lose = "perdiste";

function comenzar()
{
    numRandom = Math.round(Math.random() * 2 + 1);
    switch (numRandom) {
        case 3:
            scissors = numRandom;
            console.log("scissors " + scissors);
            break;
        case 2:
            paper = numRandom;
            console.log("paper " + paper);
            break;
        default:
            rock = numRandom;
            console.log("rock " + rock);
            break;
    }


}//FIN DE LA FUNCIÓN
function piedra()
{
	if (scissors == numRandom) {
        console.log(win);
    } else if (rock == numRandom) {
        console.log(draw);
    } else {
        console.log(lose);
    }

}//FIN DE LA FUNCIÓN
function papel()
{
	if (scissors == numRandom) {
        console.log(lose);
    } else if (rock == numRandom) {
        console.log(win);
    } else {
        console.log(draw);
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    if (scissors == numRandom) {
        console.log(draw);
    } else if (rock == numRandom) {
        console.log(lose);
    } else {
        console.log(win);
    }

}//FIN DE LA FUNCIÓN