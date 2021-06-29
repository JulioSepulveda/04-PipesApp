import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Julio Sepúlveda';
  valor: number = 1000;
  obj: Object = {"nombre": "Julio"};

  /* Lo importado en el constructor he implementado en el ngOnInit es para que en la página de noComunes al pulsar en p-fieldset */
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  mostrarDatos (){
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }
}
