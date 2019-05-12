import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraPortadaComponent } from './cabecera-portada/cabecera-portada.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraPortadaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
