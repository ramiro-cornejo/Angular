import { Component } from '@angular/core';

// Creando componente manualmente

@Component({
    selector: 'app-contador',
    template: `
    
        <h1>{{title}}</h1>
        <h3>El número base es: <strong> {{ numbase }} </strong></h3>

        <button (click) = "acumular(-numbase)"> - {{ numbase }} </button>
        <span> {{ numero }} </span>
        <button (click) = "acumular(numbase)"> + {{ numbase }} </button>
    
    
    
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
    numbase: number = 5;

    acumular( valor: number ) {
        this.numero += valor;
    }
}