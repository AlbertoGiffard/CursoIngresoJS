var numRandom;
var rock;
var paper;
var scissors;
var win = "hey! ganaste";
var draw = "empataste";
var lose = "perdiste";
var countWin = 0;
var countDraw = 0;
var countLose = 0;

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
		countWin += 1;
		document.getElementById("txtIdGanadas").value = countWin;
    } else if (rock == numRandom) {
		console.log(draw);
		countDraw += 1;
		document.getElementById("txtIdEmpatadas").value = countDraw;
    } else {
		console.log(lose);
		countLose += 1;
		document.getElementById("txtIdPerdidas").value = countLose;
    }

}//FIN DE LA FUNCIÓN
function papel()
{
	if (scissors == numRandom) {
		console.log(lose);
		countLose += 1;
		document.getElementById("txtIdPerdidas").value = countLose;
    } else if (rock == numRandom) {
		console.log(win);
		countWin += 1;
		document.getElementById("txtIdGanadas").value = countWin;
    } else {
		console.log(draw);
		countDraw += 1;
		document.getElementById("txtIdEmpatadas").value = countDraw;
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
	if (scissors == numRandom) {
		console.log(draw);
		countDraw += 1;
		document.getElementById("txtIdEmpatadas").value = countDraw;
    } else if (rock == numRandom) {
		console.log(lose);
		countLose += 1;
		document.getElementById("txtIdPerdidas").value = countLose;
    } else {
		console.log(win);
		countWin += 1;
		document.getElementById("txtIdGanadas").value = countWin;
    }
}//FIN DE LA FUNCIÓN

