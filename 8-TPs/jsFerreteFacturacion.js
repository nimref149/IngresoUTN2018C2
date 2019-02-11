/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto1;
    
    var producto2;
    
    var producto3;
   
    var suma;
    
    producto1 = parseFloat(document.getElementById("PrecioUno").value);
    producto2 = parseFloat(document.getElementById("PrecioDos").value);
    producto3 = parseFloat(document.getElementById("PrecioTres").value);

    suma=producto1 + producto2 + producto3;
    alert("La suma es " + suma);
}
function Promedio () 
{    
    var producto1;
    var producto2;
    var producto3;
    var promedio;

producto1 = parseFloat(document.getElementById("PrecioUno").value);
producto2 = parseFloat(document.getElementById("PrecioDos").value);
producto3 = parseFloat(document.getElementById("PrecioTres").value);

promedio = (producto1 + producto2 + producto3) / 3;

alert("El promedio es " + promedio);



}
function PrecioFinal () 
{
    var producto1;
    var producto2;
    var producto3;
    var preciofinal;
    var iva;
	producto1 = parseFloat(document.getElementById("PrecioUno").value);
    producto2 = parseFloat(document.getElementById("PrecioDos").value);
    producto3 = parseFloat(document.getElementById("PrecioTres").value);
iva = (producto1 + producto2 + producto3) * 21 / 100;
preciofinal = producto1 + producto2 + producto3 + iva;


alert("El precio final es " + preciofinal )

}