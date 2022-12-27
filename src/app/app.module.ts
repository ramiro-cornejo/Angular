import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from "./contador/contador.module";


@NgModule({
    declarations: [
        // adjuntar nombre de componente para ser renderizado
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeroesModule,
        ContadorModule

    ]
})
export class AppModule { }
