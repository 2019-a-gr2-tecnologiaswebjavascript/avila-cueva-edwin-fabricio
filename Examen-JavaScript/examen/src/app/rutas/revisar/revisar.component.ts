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

  ngOnInit() {
    this.arregloFacturas = this._facturaService.arregloFacturas;
  }

}
