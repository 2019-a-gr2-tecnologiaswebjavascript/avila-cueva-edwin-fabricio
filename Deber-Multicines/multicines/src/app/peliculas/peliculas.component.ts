import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  @Input()
  imagenPelicula;

  @Input()
  nombrePelicula;
  
  @Input()
  edadPelicula;
  
  @Input()
  iconoPelicula;


  constructor() { }

  ngOnInit() {
  }

}
