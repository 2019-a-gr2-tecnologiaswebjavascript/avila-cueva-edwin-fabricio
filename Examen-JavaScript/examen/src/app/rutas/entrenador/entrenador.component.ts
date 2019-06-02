import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BuscarCajeroService } from 'src/app/servicios/buscar-cajero/buscar-cajero.service';


@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {
  

  constructor(private readonly _buscarService:BuscarCajeroService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _auth:AuthService,
    private readonly _router:Router

    ) { }

    
  nombreCajero;
  ocultar=false;
  nombreRutaEntrenador;
  rutaPokemon;
  crearPokemon(nombre){
    this.ocultar = true;
    this.rutaPokemon=['/menu',this._auth.nombreCajeroLogin,'entrenador',nombre,'pokemon'];
    this._router.navigate(this.rutaPokemon);
  }

  

  ngOnInit() {  
    console.log(this.nombreBuscarEntrenador);
  }
  mostrar=false;
  nombreEntrenador;
  apellidoEntrenador;
  fechaEntrenador;
  numeroMedallasEntrenador;
  campeonEntrenador;
  arregloEntrenador;
  
  mostrarFormularioEntrenador(evento){
    this.mostrar = evento;
  }

  ver=true;
  bandera=false;
  crearEntrenador(){
    const nombreABuscar = this._auth.nombreCajeroLogin;
    const respuesta = this._buscarService.buscarCajero(nombreABuscar);
    const respuestaBuscar = respuesta.arreglo.arregloEntrenador.find(
      (valor)=>{
        if(valor.nombreEntrenador === this.nombreEntrenador){
            this.bandera= true;
            return true;
        }else{
          this.bandera= false;
          return false;
        };
      }
    )

      if(this.bandera === true){
        alert('YA EXISTE ESE ENTRENADOR');
      }else{
        console.log(respuesta.arreglo.arregloEntrenador.push(
          {
            nombreEntrenador: this.nombreEntrenador,
            apellidoEntrenador: this.apellidoEntrenador,
            fechaNacimiento: this.fechaEntrenador,
            numeroMedallas: this.numeroMedallasEntrenador,
            campeonActual: this.campeonEntrenador, 
            arregloPokemon:[
              {
              } 
            ] 
          }
        ));
        this.arregloEntrenador = respuesta.arreglo.arregloEntrenador;
      }
    
  }


  nombreBuscarEntrenador;
  arregloBuscado=[];
  esconder=false;
  buscarEntrenador(evento){
    if(this.nombreBuscarEntrenador){
      const respuesta = this.arregloEntrenador.find(
        (valor)=>{
  
          return valor.nombreEntrenador ===  this.nombreBuscarEntrenador;
        }
      );
      this.arregloBuscado=respuesta;
  
      this.esconder= evento;
    }else{
    
      this.esconder = false;
      this.arregloEntrenador; 
  }
  }

  indiceEliminar;
  eliminarEntrenador(nombreAEliminar){
    const respuesta = this.arregloEntrenador.forEach(
      (valor,indice)=>{
         if(valor.nombreEntrenador === nombreAEliminar){
            this.indiceEliminar = indice;
        }
      });

      this.arregloEntrenador.splice(this.indiceEliminar,1);

  }

  eliminarEntrenadorBusqueda(nombreAEliminar){
    delete(this.arregloBuscado);
    const respuesta = this.arregloEntrenador.forEach(
      (valor,indice)=>{
         if(valor.nombreEntrenador === nombreAEliminar){
            this.indiceEliminar = indice;
        }
      });

      this.arregloEntrenador.splice(this.indiceEliminar,1);
  }
 

  
}
