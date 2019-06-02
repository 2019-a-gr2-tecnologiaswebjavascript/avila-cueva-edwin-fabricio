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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuardarComponent,
    RutaNoEncontradaComponent,
    MenuComponent,
    EntrenadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [EstaLogeadoService,AuthService,GuardarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
