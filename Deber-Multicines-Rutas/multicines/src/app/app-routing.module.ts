import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioMulticinesComponent } from './rutas/inicio-multicines/inicio-multicines.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { DulceriaMulticinesComponent } from './rutas/dulceria-multicines/dulceria-multicines.component';
import { PromocionesMulticinesComponent } from './rutas/promociones-multicines/promociones-multicines.component';
import { MulticlubMulticinesComponent } from './rutas/multiclub-multicines/multiclub-multicines.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioMulticinesComponent
  },
  {
    path: 'dulceria',
    component: DulceriaMulticinesComponent
  },
  {
    path: 'promociones',
    component: PromocionesMulticinesComponent
  },
  {
    path: 'multiclub',
    component: MulticlubMulticinesComponent
  },
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
  {
    path:'**',
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash:true,
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
