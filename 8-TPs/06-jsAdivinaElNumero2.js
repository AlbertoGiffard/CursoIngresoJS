/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos = 0;
let flag = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round(Math.random() * 99 +1);
	contadorIntentos = 0;
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
			switch (contadorIntentos) {
				case 1:
					tries.value = contadorIntentos;
					alert("usted es un Psíquico");
					flag = 0;
					contadorIntentos = 0;
					break;
				case 2:
					tries.value = contadorIntentos;
					alert("excelente percepción");
					flag = 0;
					contadorIntentos = 0;
					break;
				case 3:
					tries.value = contadorIntentos;
					alert("Esto es suerte");
					flag = 0;
					contadorIntentos = 0;
					break;
				case 4:
					tries.value = contadorIntentos;
					alert("Excelente técnica");
					flag = 0;
					contadorIntentos = 0;
					break;
				case 5:
					tries.value = contadorIntentos;
					alert("usted está en la media");
					flag = 0;
					contadorIntentos = 0;
					break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					tries.value = contadorIntentos;
					alert("falta técnica");
					flag = 0;
					contadorIntentos = 0;
					break;		
				default:
						tries.value = contadorIntentos;
						alert("afortunado en el amor!!");
						flag = 0;
						contadorIntentos = 0;
						break;
			}
		  } else if(numeroSecreto < number){
			alert("Se pasó");
		  } else{
			
			alert("Falta...");
		  }
		document.getElementById("txtIdNumero").value = "";
		document.getElementById("txtIdNumero").focus();
	  }
	

}