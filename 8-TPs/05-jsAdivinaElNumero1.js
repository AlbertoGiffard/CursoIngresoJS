/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let flag = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random() * 99 +1);
  let contadorIntentos = 0;
  //para que tome el foco
  document.getElementById("txtIdNumero").focus();
	alert(numeroSecreto);
	flag = 1;

}

function verificar()
{
  if (flag == 0 ) {
    alert("Primero debes presionar el boton Comenzar");
  } else{
      let number = document.getElementById("txtIdNumero").value;
      number = parseInt(number);
      let tries = document.getElementById("txtIdIntentos");
      contadorIntentos++;
    if (numeroSecreto == number) {
      tries.value = contadorIntentos;
      alert("Usted es un ganador!!!");
      flag = 0;
      contadorIntentos = 0;
    } else if(numeroSecreto < number){
      alert("Se pasó");
    } else{
      
      alert("Falta...");
    }
    document.getElementById("txtIdNumero").value = "";
    document.getElementById("txtIdNumero").focus();
  }
	
}