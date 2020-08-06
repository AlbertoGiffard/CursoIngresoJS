
function mostrar()
{
	//declaracion de variables
	let average;
	let brand;
	let count;
	let firstAlcohol = false;
	let maker;
	let minPriceAlcohol;
	let minCountAlcohol;
	let minMakerAlcohol;
	let maxCount;
	let price;
	let type;
	let countMask = 0;
	let countAlcohol = 0;
	let countSoap = 0;
	let totalMask = 0;
	let totalAlcohol = 0;
	let totalSoap = 0;
	let messageAlcohol = "A- No se compraron alcoholes";
	let messageB;
	let messageSoap;

	//(utilizo un for porque conozco de antemano la cantidad de repeticiones)
	for(let i = 1; i <= 1; i++){
		type = prompt(`Ingrese tipo: "barbijo", "jabon" o "alcohol"`).toLowerCase();
		while (!(type == "barbijo" || type == "jabon" || type == "alcohol")) {
			type = prompt(`Error, tipo inválido, ingrese tipo: "barbijo", "jabon" o "alcohol"`).toLowerCase();	
		} 
		price = parseFloat(prompt("Ingrese precio: entre 100 y 300"));
		while (!(price >= 100 && price <= 300)) {
			price = parseFloat(prompt("Precio inválido, ingrese precio: entre 100 y 300"));
		}
		count = parseInt(prompt("Ingrese cantidad: máximo 1000 unidades"));
		while (!(count > 0 && count <= 1000)) {
			price = parseInt(prompt("Cantidad inválida, ingrese cantidad: máximo 1000 unidades"));
		}
		brand = prompt("ingrese marca");
		maker = prompt("ingrese fabricante");

		//-A tengo que reconocer si el producto es alcohol y recordar el precio y la cantidad y el fabricante del mas barato(minimo)
		if (type == "alcohol") {
			totalAlcohol += count;
			countAlcohol++;
			if (!firstAlcohol || minPriceAlcohol > price) {
				firstAlcohol = true;
				minPriceAlcohol = price;
				minCountAlcohol = count;
				minMakerAlcohol = maker;
			} 
		} else if(type == "barbijo") {
			totalMask += count;
			countMask++;
		}else{
			//-C cuantas unidades de jabon hay
			totalSoap += count;
			countSoap++;
		}
	}
	//-B del tipo con mas unidades y la cantidad de tipo de producto para sacar el promedio de compra del acumulador mayor
	if (totalAlcohol > totalMask && totalAlcohol > totalSoap) {
		//el total de alcohol sea mayor
		maxCount = "Alcohol";
		average = totalAlcohol / countAlcohol;
	} else if(totalMask >= totalAlcohol && totalMask > totalSoap){
		//el total de barbijos sea mayor
		maxCount = "Barbijo";
		average = totalMask / countMask;
	} else{
		//el total de jabon sea mayor
		maxCount = "Jabon";
		average = totalSoap / countSoap;
	}
	
	if (firstAlcohol) {
		messageAlcohol = `A- Fabricante alcohol con menor precio: ${minMakerAlcohol}
		\n Cantidad: ${minCountAlcohol}
		\n Precio: ${minPriceAlcohol}`
	}
	messageB = `B- Tipo con mas unidades: ${maxCount}
	\n Promedio por compra: ${average}`;

	messageSoap = `C- Unidades de jabon: ${totalSoap}`;

	alert(messageAlcohol + "\n" + messageB + "\n" + messageSoap);






}
