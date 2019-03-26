#include <stdio.h>
#include <stdlib.h>

int main()
{
   int opcion;
   char seguir = 's';
   do
   {

    printf("1.alta\n2.baja\n3.Informar\n4.Salir\nElija una opcion: ");
    scanf("%d",&opcion);

    switch(opcion){
    case 1:
    printf("Estoy dando de alta!!\n");
    break;
    case 2:
    printf("Estoy dando de baja!!\n");
    break;
    case 4:
    printf("Estoy Saliendo del programa\n");
    seguir='n';
    break;
    case 3:
    printf("Estoy informando!!\n");
    break;
    default:
    printf("No ingreso una opcion valida!!\n");
    break;

    }
    system("pause");
    system("cls");


}while(seguir=='s');


return 0;
}


