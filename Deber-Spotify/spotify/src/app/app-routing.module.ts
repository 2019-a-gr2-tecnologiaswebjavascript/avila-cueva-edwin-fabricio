import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonListComponent } from './tab1/mensajes/ion-list/ion-list.component';
import { MensajeComponent } from './tab1/mensajes/mensaje/mensaje.component';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path:'ion-list',
    component: IonListComponent,
  },
  {
    path:'mensaje/:nombrePersona',
    component: MensajeComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
