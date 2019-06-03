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
  arregloFilter;


  ngOnInit() {
    this.arregloFacturas = this._facturaService.arregloFacturas;
  }

  buscarNombre(evento){
    this.esconder=evento;
    const respuestaFilter = this.arregloFacturas.filter(
      (valor)=>{
          return valor.nombreCajeroFact === this.nombreABuscar || valor.nombreComprador === this.nombreABuscar;
        }
    );
    this.arregloFilter = respuestaFilter;
    console.log('repuesaFIND',respuestaFilter);
  }

}
