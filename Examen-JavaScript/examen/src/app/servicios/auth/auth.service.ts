import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cajero } from 'src/app/interfaces/nombre-cajero';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estaLogeado: boolean = false;
  
  arregloNombresCajero:Cajero[] = [];
  nombreCajeroLogin;

  constructor(private readonly _router:Router) { }
  login(nombreCajero:string){
    console.log('arreglo login',this.arregloNombresCajero);
    console.log('repuesta metodo',this.buscarNombreCajero(nombreCajero));
    if(this.buscarNombreCajero(nombreCajero)){
      this.nombreCajeroLogin = nombreCajero;
      console.log('nombreee',this.nombreCajeroLogin);
      console.log('arreglo en aut',this.arregloNombresCajero)
      this.estaLogeado = true;
      const url = ['/menu',nombreCajero];
      this._router.navigate(url);
      return true;
    }else{
      const url = ['/guardar'];
      this._router.navigate(url);
      this.estaLogeado = false;
      return false;
    }
  }

  buscarNombreCajero(nombreABuscar){
    if(this.arregloNombresCajero.length === 0){
        return false;
    }else{
      const respuestaFind = this.arregloNombresCajero.find(
        (valor):boolean=>{
           if(valor.nombreCajero === nombreABuscar){
            return true;
           }else{
             return false;
           };
        }
      );
      return respuestaFind;
    }
  }

  
  logout(){
    this.estaLogeado = false;
    const url = ['/login'];
    this._router.navigate(url);
  }

}

