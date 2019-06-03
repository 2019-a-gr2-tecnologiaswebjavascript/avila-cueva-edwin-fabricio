import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.component.html',
  styleUrls: ['./revisar.component.css']
})
export class RevisarComponent implements OnInit {

  arregloFacturas;
  constructor(private readonly _facturaService:FacturaService) { }

  nombreABuscar;
  arregloBusquedaCajero=[];
  arregloBusquedaUsuario=[];
  esconder=false;
  ver=false;

  ngOnInit() {
    this.arregloFacturas = this._facturaService.arregloFacturas;
  }

  buscarNombre(evento){
    this.esconder=evento;
    this.arregloFacturas.find(
      (valor)=>{
        if(valor.nombreCajeroFact === this.nombreABuscar){
          this.arregloBusquedaCajero.push(valor);
          console.log('arreglo cajero',this.arregloBusquedaCajero);
          return this.arregloBusquedaCajero
        }else if(valor.nombreComprar === this.nombreABuscar){
          this.arregloBusquedaUsuario.push(valor);
          console.log('arreglo Usuaoir',this.arregloBusquedaCajero);
          this.ver=evento;
          return this.arregloBusquedaUsuario;
        }
      }
    );
  }

}
