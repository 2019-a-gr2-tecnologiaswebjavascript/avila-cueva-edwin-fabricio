import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CabeceraMulticinesComponent } from './cabecera-multicines/cabecera-multicines.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FiltrosComponent } from './filtros/filtros.component';

 
@NgModule({
  declarations: [
    AppComponent,
    CabeceraMulticinesComponent,
    CarouselComponent,
    FiltrosComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
