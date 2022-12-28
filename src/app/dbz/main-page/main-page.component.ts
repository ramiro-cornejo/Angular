import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 15000
  }

  agregarForm() {
    console.log('Prueba de funcionamiento');
  }
}
