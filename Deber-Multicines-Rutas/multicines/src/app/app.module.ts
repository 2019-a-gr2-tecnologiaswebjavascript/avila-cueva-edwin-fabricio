import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselPortadaComponent } from './rutas/inicio-multicines/componentes-inicio/carousel-portada/carousel-portada.component';
import { FiltroPortadaComponent } from './rutas/inicio-multicines/componentes-inicio/filtro-portada/filtro-portada.component';
import { PeliculasPortadaComponent } from './rutas/inicio-multicines/componentes-inicio/peliculas-portada/peliculas-portada.component';
import { InicioMulticinesComponent } from './rutas/inicio-multicines/inicio-multicines.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { DulceriaMulticinesComponent } from './rutas/dulceria-multicines/dulceria-multicines.component';
import { PromocionesMulticinesComponent } from './rutas/promociones-multicines/promociones-multicines.component';
import { MulticlubMulticinesComponent } from './rutas/multiclub-multicines/multiclub-multicines.component';
import { CarouselDulceriaComponent } from './rutas/dulceria-multicines/componentes-dulceria/carousel-dulceria/carousel-dulceria.component';
import { ImagenesDulcesComponent } from './rutas/dulceria-multicines/componentes-dulceria/imagenes-dulces/imagenes-dulces.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioMulticinesComponent,
    CarouselPortadaComponent,
    FiltroPortadaComponent,
    PeliculasPortadaComponent,
    RutaNoEncontradaComponent,
    DulceriaMulticinesComponent,
    PromocionesMulticinesComponent,
    MulticlubMulticinesComponent,
    CarouselDulceriaComponent,
    ImagenesDulcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
