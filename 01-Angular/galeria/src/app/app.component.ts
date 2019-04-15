import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  arregloFlores = [
    new Flor ("papitas","A lo bestia"),
    new Flor ("carnitas","Gorditas"),
    new Flor ("chicas","Cheveres")
  ];

  arregloFloresJs = [
    {
      nombre:"Papitas",
      descripcion:"A lo bestia",
    },
    {
      nombre:"Carnitas",
      descripcion:"Gorditas",
    },
    {
      nombre:"Chicas",
      descripcion:"Cheveres",
    },
  ]

  color="rojo";

  cambioChela(evento:Boolean){
    console.log('Llego a chela:',evento);
    this.color="verde";
  }

  cambioCerveza(evento:Boolean){
    console.log('Llego a cerveza:',evento);
    this.color="amarillo";
  }
}

class Flor {
  constructor(
    public nombre:string, //yo voy a tener una variable llamanda nombre y que me van a mandar 
    //si no podemos el modificador de acceso, solo es un paramtreo
    public descripcion:string){   
  }
}