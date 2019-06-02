import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate{ 
  
  constructor(private readonly _authService:AuthService,
              private readonly _route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): boolean  {
              const estaLogeado = this._authService.estaLogeado;
              console.log(estaLogeado);
              if(estaLogeado){
                return true;
              }else{
                const url = ['/guardar'];
                this._route.navigate(url);
                return false;
              }
  }

  
}
