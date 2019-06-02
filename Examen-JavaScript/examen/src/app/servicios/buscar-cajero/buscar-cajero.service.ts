import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BuscarCajeroService {

  constructor(private readonly _authService:AuthService) { }

  buscarCajero(nombre){
    const respuesta = this._authService.arregloNombresCajero.find(
      (valor)=>{
        return valor.nombreCajero = nombre;
      }
    )
  
    const respuestaArreglo={
      valor: true,
      arreglo: respuesta,
    }
    return  respuestaArreglo;
  }
  
  obtenerNombre(nombre){
    console.log('welele',nombre);
  }

  
}
