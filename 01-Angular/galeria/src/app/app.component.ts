import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  arregloFlores = [
    new Flor ("chicas","LINDAS"),
    new Flor ("papitas","A lO BESTIA"),
    new Flor ("carnitas","GORDITAS")
    
  ];

  arregloFloresJs = [
    {
      nombre:"chicas",
      descripcion:"LINDAS",
    },
    {
      nombre:"papitas",
      descripcion:"A lO BESTIA",
    },
    {
      nombre:"carnitas",
      descripcion:"GORDITAS",
    },
    
  ]




  cambioChela(evento:Boolean){
    console.log('Llego a chela:',evento);
    const color="verde";
  }

  cambioCerveza(evento:Boolean){
    console.log('Llego a cerveza:',evento);
  }
}




class Flor {
  constructor(
    public nombre:string //si no podemos el modificador de acceso, solo es un paramtreo
    ,public descripcion:string){   
  }
}