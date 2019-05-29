import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-peliculas-portada',
  templateUrl: './peliculas-portada.component.html',
  styleUrls: ['./peliculas-portada.component.css']
})
export class PeliculasPortadaComponent implements OnInit {

  @Input()
  imagenPelicula;

  @Input()
  nombrePelicula;
  
  @Input()
  edadPelicula;
  
  @Input()
  iconoPelicula;

  @Input()
  videoPelicula;

  @Input()
  arregloPeliculas;

  nombrePeliculaModal;
  mostrar=false;
  
  @Output()
  cambioNombre:EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  eventoNombrePelicula(nombrePelicula){
    const respuestaFind = this.arregloPeliculas.find(
      (valor):boolean => {
        return valor.nombrePelicula == nombrePelicula;
      }
    );
    this.cambioNombre.emit(respuestaFind);
  }

  aparecerBotones(mostrar){
    console.log(mostrar);
    this.mostrar = mostrar;
  }
  
}
