import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'julio';
  nombreUpper: string = 'JULIO';
  nombreCompleto: string = 'juliO sePĂșlVedA';

  fecha: Date = new Date();



}
