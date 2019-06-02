import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './rutas/login/login.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { EstaLogeadoService } from './servicios/guards/esta-logeado.service';
import { GuardarComponent } from './rutas/guardar/guardar.component';
import { MenuComponent } from './rutas/menu/menu.component';
import { EntrenadorComponent } from './rutas/entrenador/entrenador.component';
import { ComprarComponent } from './rutas/comprar/comprar.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'guardar',
    component:GuardarComponent
  },
  {
    path:'menu/:nombre',
    component:MenuComponent,
    canActivate:[
      EstaLogeadoService
    ],
    children:[
      {
        path:'entrenador',
        component:EntrenadorComponent
      },
      {
        path:'comprar',
        component:ComprarComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'**',
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash:true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
