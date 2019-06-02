import { Component, OnInit } from '@angular/core';
import { GuardarService } from 'src/app/servicios/guardar/guardar.service';



@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {

  constructor(private readonly _guardarService:GuardarService) { }

  ngOnInit() {
  }

  nuevoNombreCajero;

  guardarNombre(){
    this._guardarService.agregarNombreCajero(this.nuevoNombreCajero);
  }
}
