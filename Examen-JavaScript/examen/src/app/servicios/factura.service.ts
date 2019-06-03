import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor() { }

  arregloFacturas=[];
  guardarFactura(arreglo){
    this.arregloFacturas.push(arreglo);
    console.log('facturas',this.arregloFacturas);
  }
 
}
