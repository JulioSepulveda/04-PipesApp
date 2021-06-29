import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  /* i18nSelect */
  nombre:string = 'Julio';
  genero:string = 'masculino';
  invitacionMapping = {
    '': 'invitarlo',
    'femenino': 'invitarla'
  }

  /* i18nPlural */
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  /* Con la # indicamos que coja el valor de la variable */
  clientesMapping = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarNombre() {
      this.nombre = 'Rocío';
      this.genero = 'femenino';
  }

  eliminarCliente() {
    /* elimina ek último elemento del array */
      this.clientes.pop();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Julio',
    edad: 33,
    dirección: 'Madrid, España'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000); //Devuelve 0, 1, 2, 3, 4 ....

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });
}
