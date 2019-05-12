import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { RutaProductosVideojuegosComputadoraComponent } from './rutas/ruta-productos-videojuegos-computadora/ruta-productos-videojuegos-computadora.component';
import { RutaProductosVideojuegosPlaystationComponent } from './rutas/ruta-productos-videojuegos-playstation/ruta-productos-videojuegos-playstation.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaCreditosComponent,
    RutaProductosComponent,
    RutaNoEncontradaComponent,
    RutaProductosHogarComponent,
    RutaProductosVideojuegosComponent,
    RutaProductosVideojuegosComputadoraComponent,
    RutaProductosVideojuegosPlaystationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
