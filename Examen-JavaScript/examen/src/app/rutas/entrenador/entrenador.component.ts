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
      //parametros de RUTA .params
      const parametros$ = this._activatedRoute.params;
      //solo en parametros de busqueda o cconsulta 
      //usamos el error y el completado 
      parametros$
      .subscribe(
        (parametros)=>{//cuando las cosads estan bien ->try
          this.nombreCajero = this._auth.nombreCajeroLogin;
          this.arregloEntrenadorG = this._buscarService.buscarCajero(this.nombreCajero);
          this.arregloEntrenadorNC= this.arregloEntrenadorG.arreglo;
          this.arregloEntrenadorE = this.arregloEntrenadorG.arreglo.arregloEntrenador;
        },
        (error)=>{ //cuando las cosas estan mal ->catch
          console.log('Error',error);
        },
        ()=>{//es como el  finally que termina de hacer todo
              // y al ultimo ejecuta esto ->finally
          console.log('Completo');
        }
      )
  }


  arregloEntrenadorG;
  arregloEntrenadorNC
  arregloEntrenadorE;
  nombreBuscarEntrenador
  mostrar=false; 
  nombreEntrenador;
  apellidoEntrenador;
  fechaEntrenador;
  numeroMedallasEntrenador;
  campeonEntrenador;
  costo;
  
  mostrarFormularioEntrenador(evento){
    this.mostrar = evento;
  }


  bandera=false;
  crearEntrenador(){
    this.arregloEntrenadorE.find(
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
        console.log(this.arregloEntrenadorE.push(
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
    }
    
  }


  arregloEntrenadorBuscar;
  esconder=false;
  buscarEntrenador(evento){
    if(this.nombreBuscarEntrenador != ""){
      this.arregloEntrenadorBuscar = this._buscarService.buscarEntrenador1(this.nombreBuscarEntrenador,this.arregloEntrenadorE);
      this.esconder=evento;
    }else{
      this.esconder=false;
    }
  }

  indiceEliminar;
  eliminarEntrenador(nombreAEliminar){
    const respuesta = this.arregloEntrenadorE.forEach(
      (valor,indice)=>{
         if(valor.nombreEntrenador === nombreAEliminar){
            this.indiceEliminar = indice;
        }
      });

      this.arregloEntrenadorE.splice(this.indiceEliminar,1);

  }

  /*eliminarEntrenadorBusqueda(nombreAEliminar){
    //delete(this.arregloBuscado);
    const respuesta = this.arregloEntrenador.forEach(
      (valor,indice)=>{
         if(valor.nombreEntrenador === nombreAEliminar){
            this.indiceEliminar = indice;
        }
      });

      this.arregloEntrenador.splice(this.indiceEliminar,1);
  }*/
 

  
}
