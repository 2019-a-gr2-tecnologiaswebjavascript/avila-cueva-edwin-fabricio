import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multicines';

  arregloPeliculas = [
    {
      imagenPelicula:"../../assets/imagenes/avengers-cartelera.jpg",
      nombrePelicula:"AVENGERS END GAME",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../assets/imagenes/star-red.svg"
    },
    {
      imagenPelicula:"../../assets/imagenes/pikachu-cartelera.jpg",
      nombrePelicula:"DETECTIVE PIKACHU",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/imagenes/star-red.svg"
    },
    {
      imagenPelicula:"../../assets/imagenes/capitana-cartelera.jpg",
      nombrePelicula:"CAPITANA MARVEL",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../assets/imagenes/ticket.png"
    },
    {
      imagenPelicula:"../../assets/imagenes/dumbo-cartelera.jpg",
      nombrePelicula:"DUMBO",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/imagenes/star-red.svg"
    },
    {
      imagenPelicula:"../../assets/imagenes/shazam-cartelera.jpg",
      nombrePelicula:"SHAZAM",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../assets/imagenes/ticket.png"
    },
    {
      imagenPelicula:"../../assets/imagenes/hellboy-cartelera.jpg",
      nombrePelicula:"HELLBOY",
      edadPelicula:"MAYORES DE 15 AÑOS",
      iconoPelicula:"../../assets/imagenes/ticket.png"
    },
    {
      imagenPelicula:"../../assets/imagenes/lallorona-cartelera.jpg",
      nombrePelicula:"LA LLORONA",
      edadPelicula:"MAYORES DE 18 AÑOS",
      iconoPelicula:"../../assets/imagenes/star-red.svg"
    },
    {
      imagenPelicula:"../../assets/imagenes/toy-cartelera.jpg",
      nombrePelicula:"TOY STORY 4",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/imagenes/star-green.svg"
    },
    {
      imagenPelicula:"../../assets/imagenes/dragon-cartelera.jpg",
      nombrePelicula:"COMO ENTRENAR",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/imagenes/ticket.png"
    },
    {
      imagenPelicula:"../../assets/imagenes/glass-cartelera.jpg",
      nombrePelicula:"GLASS",
      edadPelicula:"MAYORES DE 15 AÑOS",
      iconoPelicula:"../../assets/imagenes/ticket.png"
    },
   
    {
      imagenPelicula:"../../assets/imagenes/mary-cartelera.jpg",
      nombrePelicula:"MARY POPPINS",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/imagenes/ticket.png"
    },
    {
      imagenPelicula:"../../assets/imagenes/dora-cartelera.jpg",
      nombrePelicula:"DORA LA EXPLORADORA",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/imagenes/star-green.svg"
    }
  ];
}
