import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  /* Todo lo puesto en el ngOnInit se puede copíar apartado menuBar de la pagina PrimeNg para que se pueda  ver un ejemplo de como montar el menú 
     En resumen son una conjunto de arrays de estructuras con el label, el icono y la ruta web de la clase app-router.module para crear cada 
     opción de menuBar.*/
  ngOnInit(): void {

    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
      }
    ];
  }

}
