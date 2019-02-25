function Mostrar()
{

	//var contador=0; no sirve en este ejercicio
	var positivo=0;
	var negativo=1;
	//var respuesta="si"; no va
	var numero;
	var respuesta;
	var flag;
do{
    numero = parseInt(prompt("Ingrese numero: "));
	
	if(numero >= 0) {
		positivo = positivo + numero;
	}else{
		negativo = negativo * numero;
	}
	respuesta = prompt("Desea continuar? ").toLowerCase();
}while(respuesta=="s");

document.getElementById('suma').value=positivo;
if( flag == 0 ) {
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN