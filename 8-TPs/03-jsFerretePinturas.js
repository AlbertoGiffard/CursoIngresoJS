/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperature = document.getElementById("txtIdTemperatura").value;
    temperature = parseFloat(temperature);
    let c = (temperature -32) * 5/9;
    alert(`${temperature} Fahrenheit son ${c} centrígrados`)
}

function CentigradosFahrenheit () 
{
    let temperature = document.getElementById("txtIdTemperatura").value;
    temperature = parseFloat(temperature);
    let f = (temperature * 9/5) + 32;
    alert(`${temperature} centrígrados son ${f}  Fahrenheit`)
}
