import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

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
      titulo:"Don Jose",
      nombre:"Papitas",
      descripcion:"A lo bestia",
      notas:[
        'Hot Dog',
        'Hamburguesas',
        'Papitas'
      ]
    },
    {
      titulo:"Don Pepito",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      notas:[
        'Papitas',
        'Empanadas',
      ]
    },
    {
      titulo:"Doña Maria",
      nombre:"Chicas",
      descripcion:"Cheveres",
      notas:[
        'Motes',
        'Fritadas',
        'Papitas'
      ]
    },
  ]

  claseTitulo="rojo";

  estaMostrando=false;

  constructor(private readonly _carritoService:CarritoService){
  }


  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }

  cambioChela(evento:Boolean){
    console.log('Llego a chela:',evento);
    this.claseTitulo="verde";
  }

  cambioCerveza(evento:Boolean){
    console.log('Llego a cerveza:',evento);
    this.claseTitulo="amarillo";
  }
}

class Flor {
  constructor(
    public nombre:string, //yo voy a tener una variable llamanda nombre y que me van a mandar 
    //si no podemos el modificador de acceso, solo es un paramtreo
    public descripcion:string){   
  }
}