import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  constructor(private readonly _auth:AuthService,
    private readonly _route:Router) { }


  agregarNombreCajero(nuevoNombre){
    if(this._auth.buscarNombreCajero(nuevoNombre)){
      const url = ['/login'];
      this._route.navigate(url);
    }else{
      this._auth.arregloNombresCajero.push(
        {
          nombreCajero: nuevoNombre,
          arregloEntrenador:[
            {
            nombreEntrenador:'',
            apellidoEntrenador:'',
            fechaNacimiento:new Date,
            numeroMedallas: 0,
            campeonActual: true,   
            arregloPokemon:[
                {
                numeroPokemon: 0,
                nombrePokemon:'',  
                poderEspecialUno:'' ,
                poderEspecialDos:'',
                fechaCaptura: new Date,  
                nivel: 0,
                }
            ],
            }
        ]
        }
      );
      console.log('guarda',this._auth.arregloNombresCajero);
      const url = ['/login'];
      this._route.navigate(url);
    }
  }
}
