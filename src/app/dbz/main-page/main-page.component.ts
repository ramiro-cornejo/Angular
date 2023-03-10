import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Ramiro',
    poder: 45444
  }
  
  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) {
    
  }
}
