import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraPortadaComponent } from './cabecera-portada/cabecera-portada.component';
import { CarouselPortadaComponent } from './carousel-portada/carousel-portada.component';
import { FiltroPortadaComponent } from './filtro-portada/filtro-portada.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraPortadaComponent,
    CarouselPortadaComponent,
    FiltroPortadaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
