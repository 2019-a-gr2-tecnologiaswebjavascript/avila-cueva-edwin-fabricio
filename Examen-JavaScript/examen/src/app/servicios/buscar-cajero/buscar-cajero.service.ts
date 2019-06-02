import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BuscarCajeroService {

  constructor(private readonly _authService:AuthService) { }

  buscarCajero(nombre){
    console.log('nome en meotod',nombre);
    const respuesta = this._authService.arregloNombresCajero.find(
      (valor)=>{
        return valor.nombreCajero === nombre;
      }
    )
    console.log('asdas',respuesta);
    const respuestaArreglo={
      valor: true,
      arreglo: respuesta,
    }
    return  respuestaArreglo;
  }

  buscarEntrenador(nombre){
    const respuestaBuscar = this.buscarCajero(this._authService.nombreCajeroLogin); 
 
    const respuestaBuscarEntrenador = respuestaBuscar.arreglo.arregloEntrenador.find(
      (valor)=>{
        return valor.nombreEntrenador === nombre;
      }
    )
    const respuestaArreglo={
      valor : true,
      arreglo: respuestaBuscarEntrenador
    }
    //console.log('arelogbucads',respuestaArreglo); 
    return respuestaArreglo;
  }
  
  buscarEntrenador1(entrenador,arreglo){
    const respuestaFind = arreglo.find(
      (valor)=>{
        return valor.nombreEntrenador === entrenador;
      }
    )
      return respuestaFind;
  }
  

  buscarPokemon(pokemon,arreglo){
    const respuestaFind = arreglo.find(
      (valor)=>{
        return valor.nombrePokemon === pokemon;
      }
    )
  
      return respuestaFind;
  }

  
}
