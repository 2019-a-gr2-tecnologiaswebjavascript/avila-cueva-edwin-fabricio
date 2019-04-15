import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [//los componentes 
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [ //guardamos otros modulos
    BrowserModule //nos comparte directivas -> nos comparte la funcionalidad de las directivas 
  ],
  providers: [//servicios
    CarritoService
  ], 
  bootstrap: [AppComponent]//ahí va el componente principal 
})
export class AppModule { }
