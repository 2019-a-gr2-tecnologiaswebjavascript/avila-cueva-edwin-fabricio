import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './rutas/login/login.component';
import { GuardarComponent } from './rutas/guardar/guardar.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { EstaLogeadoService } from './servicios/guards/esta-logeado.service';
import { AuthService } from './servicios/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './rutas/menu/menu.component';
import { GuardarService } from './servicios/guardar/guardar.service';
import { EntrenadorComponent } from './rutas/entrenador/entrenador.component';
import { ComprarComponent } from './rutas/comprar/comprar.component';
import { PokemonComponent } from './rutas/pokemon/pokemon.component';
import { RevisarComponent } from './rutas/revisar/revisar.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { BuscarCajeroService } from './servicios/buscar-cajero/buscar-cajero.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuardarComponent,
    RutaNoEncontradaComponent,
    MenuComponent,
    EntrenadorComponent,
    ComprarComponent,
    PokemonComponent,
    RevisarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [EstaLogeadoService,AuthService,GuardarService,CarritoService,BuscarCajeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
