import { Pipe, PipeTransform } from "@angular/core";

/* Para crear un pipe primero tenemos que crear el archivo [nombre].pipe.ts 
   después tenemos que crear una clase dentro de este archivo con el decorador Pipe (en el cual ponemos el nombre con el que llamaremos a este pipe)
   Por último tenemos que implementar de PipeTransform e incluir el método transform para indicar que va a realizar dicho pipe */
@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    /* El segundo parámetro se pone igual a true para los casos en los que no se indique en la llamada */
    transform( valor: string, enMayusculas: boolean = true ): string {

        /* if ( enMayusculas ){
            return valor.toUpperCase();
        }
        else {
            return valor.toLowerCase();
        } */
        
        /* Mejor forma de hacer lo de arriba */
        return ( enMayusculas ) ? valor.toUpperCase() : valor.toLowerCase();
        
    }

}