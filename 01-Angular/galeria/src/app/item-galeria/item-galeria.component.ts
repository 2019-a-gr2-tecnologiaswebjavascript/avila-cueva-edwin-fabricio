import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = 'Licoreria';

  @Input()
  //habilitamos que pueda ingresar un nombre del item
  nombreItem;

  @Input()
  textoBoton;

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter()

  
  @Output()
  cambioCerveza:EventEmitter<boolean> = new EventEmitter()


  
  url = "https://media.canalnet.tv/2018/08/Homero-Simpson.jpeg"

  notas = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('AUXILIO ME DESMAYO'+ ' '+ this.nombreItem)
  }

  alertarBlur(){
    alert('Alerta BLUR');
  }

  cambiarImagen(){
    //usar const
    //nunca vamos a usar VAR
    //el LET permite deja reasignar 
    const marge="https://files.lafm.com.co/assets/public/styles/image_631x369/public/margee.jpg?itok=HHB6Qz23";
    const homero="https://media.canalnet.tv/2018/08/Homero-Simpson.jpeg";
    if(this.url === homero){
      this.url = marge; 
      this.cambioChela.emit(true);
    }else{
      this.url = homero;
      this.cambioCerveza.emit(true);
    }
    
  }

}
