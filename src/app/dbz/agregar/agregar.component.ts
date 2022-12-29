import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService) {}
  

  agregarForm() {
    if ( this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}

// Depuracion de app 
// 1- .vscode 2- launch.json 3- localhost 4- f5 para probar con breakPoint

