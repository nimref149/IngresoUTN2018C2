function Mostrar()
{
//tomo la edad  
var edad;
edad = parseFloat(document.getElementById("edad").value);

if(edad>=18)
            {alert("adulto")}
   else 
       {if(edad>=13 && edad <=17)
            {alert("Es adolescente")}
           else(alert("Es niño"))
    }
}//FIN DE LA FUNCIÓN0