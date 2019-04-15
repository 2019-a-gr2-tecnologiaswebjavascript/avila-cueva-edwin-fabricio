import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = 'Licoreria';
  
  //habilitamos que pueda ingresar un nombre del item
  @Input()
  nombreItem;

  @Input()
  textoBoton;

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter()
  
  @Output()
  cambioCerveza:EventEmitter<boolean> = new EventEmitter()
  
  url = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg"

  notas = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo: '+this.nombreItem)
  }

  alertarBlur(){
    alert('Alertar blur');
  }

  cambiarImagen(){
    //usar const
    //nunca vamos a usar VAR
    //el LET permite deja reasignar 
    const cervezas="http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg";
    const chelas="http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";
    if(this.url === cervezas){
      this.url = chelas; 
      this.cambioChela.emit(true);
    }else{
      this.url = cervezas;
      this.cambioCerveza.emit(true);
    }
    
  }

}
