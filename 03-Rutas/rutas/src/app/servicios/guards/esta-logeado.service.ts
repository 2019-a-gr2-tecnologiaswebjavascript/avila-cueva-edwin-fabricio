import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate {

  constructor(private readonly _authService:AuthService,
              private readonly _route:Router) { } 

  //para que no entre los que tengan activado este guardia
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):boolean{
              const estaLogeado = this._authService.estaLogeado;
              if (estaLogeado) {
                console.log('Bienvenido');
                return true;
              } else {
                const url = ['/home','app'];
                this._route.navigate(url);
                console.log('No tiene permisos');
                return false; 
              }
    }

  


}
