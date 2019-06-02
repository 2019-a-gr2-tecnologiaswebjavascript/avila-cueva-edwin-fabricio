import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { BuscarCajeroService } from 'src/app/servicios/buscar-cajero/buscar-cajero.service';


@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {
  

  constructor(private readonly _buscarService:BuscarCajeroService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _auth:AuthService
    ) { }
  nombreCajero;
  ngOnInit() {

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

  crearEntrenador(){
    const nombreABuscar = this._auth.nombreCajeroLogin;
    const respuesta = this._buscarService.buscarCajero(nombreABuscar);
    console.log(respuesta.arreglo.arregloEntrenador.push(
      {
        nombreEntrenador: this.nombreEntrenador,
        apellidoEntrenador: this.apellidoEntrenador,
        fechaNacimiento: this.fechaEntrenador,
        numeroMedallas: this.numeroMedallasEntrenador,
        campeonActual: this.campeonEntrenador,   
      }
    ));
    this.arregloEntrenador = respuesta.arreglo.arregloEntrenador;
  }


  nombreBuscarEntrenador;
  arregloBuscado=[];
  esconder=false;
  buscarEntrenador(evento){
    if(this.nombreBuscarEntrenador){
      const respuesta = this.arregloEntrenador.find(
        (valor)=>{
          console.log('valor',valor.nombreEntrenador)
          return valor.nombreEntrenador ===  this.nombreBuscarEntrenador;
        }
      );
      this.arregloBuscado=respuesta;
      console.log(this.arregloBuscado);
      this.esconder= evento;
    }else{
      console.log('entro');
      this.esconder = false;
      this.arregloEntrenador; 
  }
  }

  eliminarEntrenador(){
    
  }
 
}
