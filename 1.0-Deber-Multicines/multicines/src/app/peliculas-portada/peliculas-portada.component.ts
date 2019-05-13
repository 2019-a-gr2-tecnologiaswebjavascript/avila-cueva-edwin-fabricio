import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peliculas-portada',
  templateUrl: './peliculas-portada.component.html',
  styleUrls: ['./peliculas-portada.component.css']
})
export class PeliculasPortadaComponent implements OnInit {

  constructor() { }

  @Input()
  imagenPelicula;

  @Input()
  nombrePelicula;
  
  @Input()
  edadPelicula;
  
  @Input()
  iconoPelicula;


  ngOnInit() {
  }

}
