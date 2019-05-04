import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraMulticinesComponent } from './cabecera-multicines/cabecera-multicines.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraMulticinesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
