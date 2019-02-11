/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var alambre;
var perimetro;

largo = parseFloat(document.getElementById("Largo").value);
ancho = parseFloat(document.getElementById("Ancho").value);
perimetro = (largo + ancho) * 2:
alambre = perimetro * 3;
alert("Nesesito comprar " + alambre + " metros de alambre");

}
function Circulo () 
{
	var alambre;
    var radio;
    var perimetro;
    radio = parseFloat(document.getElementById("Radio").value);
    perimetro = Math.PI + radio + 2;
    
    alambre = perimetro * 3;
    alert("Nesesito comprar " + alambre + "metros de alambre");






}
function Materiales () 
{
	var cemento;
    var cal;
    var perimetro;
    var superficie;
    
    cemento = superficie *2:
    cal = superficie *3;

    alambre = perimetro * 3;
    alert("Nesesito comprar " + alambre + " metros de alambre" )
}