
function mostrar()
{
/* Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert. */
    let width;
    let height;
    let perimeter;

    width = prompt("Ingrese el ancho");
    while (!(width >= 0)) {
        width = prompt("Error, reingrese el ancho");
    }
    height = prompt("Ingrese el largo");
    while (!(height >= 0)) {
        width = prompt("Error, reingrese el largo");
    }
    perimeter = 2 * height + 2 * width;
    alert("el total del perimetro es: " + perimeter);
}
