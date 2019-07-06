import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';
import { HttpClient } from '@angular/common/http';

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
        {
          comida:'Hot Dog',
          idComida:1,
        },
        {
          comida:'Hamburguesas',
          idComida:2,
        },
        {
          comida:'Papitas',
          idComida:3,
        }
      ]
    },
    {
      titulo:"Don Pepito",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      notas:[
        {
          comida:'Papitas',
          idComida:4,
        },
        {
          comida:'Empanadas',
          idComida:5,
        },
        {
          comida:'Hamburguesas',
          idComida:6,
        }
      ]
    },
    {
      titulo:"Doña Maria",
      nombre:"Chicas",
      descripcion:"Cheveres",
      notas:[
        {
          comida:'Motes',
          idComida:7,
        },
        {
          comida:'Fritadas',
          idComida:8,
        },
        {
          comida:'Papitas',
          idComida:9,
        }
      ]
    },
  ]

  claseTitulo="rojo";

  estaMostrando=false;

  constructor(private readonly _carritoService:CarritoService,
              private readonly _httpclient:HttpClient){
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