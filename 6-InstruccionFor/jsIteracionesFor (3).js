function mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
while( repeticiones <= 0 || isNaN(repeticiones)){
     repeticiones = parseInt(prompt("Ingrese el numero de repeticiones"));
     
}
for( var i=0; i < repeticiones; i++){
    console.log("Hola UTN FRA");
}

}//FIN DE LA FUNCIÓN