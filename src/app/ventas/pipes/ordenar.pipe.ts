import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor: string = ''): Heroe[] {

    switch (orderPor) {
      case 'nombre' :
        /* Función de flecha para ordenar. Si el parámetro a es mayor que el parametro b devuelve 1 para que no los mueva y viceversa con -1 
           Empieza con los dos primeros registros, luego el 2 y 3, luego 3 y 4, etc */
        return heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
        break;
      case 'vuela' :
        return heroes.sort( (a,b) => ( a.vuela > b.vuela ) ? -1 : 1 );
        break;
      case 'color' :
        return heroes.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );
        break;
      default :
        return heroes;
        break;
    }      
  }

}
