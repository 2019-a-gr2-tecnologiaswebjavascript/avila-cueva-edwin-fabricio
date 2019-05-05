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
      imagenPelicula:"../../assets/images/avengers-cartelera.jpg",
      nombrePelicula:"AVENGERS END GAME",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../assets/images/star-red.svg"
    },
    {
      imagenPelicula:"../../assets/images/capitana-cartelera.jpg",
      nombrePelicula:"CAPITANA MARVEL",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../assets/images/ticket.png"
    },
    {
      imagenPelicula:"../../assets/images/dumbo-cartelera.jpg",
      nombrePelicula:"DUMBO",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/images/star-red.svg"
    },
    {
      imagenPelicula:"../../assets/images/shazam-cartelera.jpg",
      nombrePelicula:"SHAZAM",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../assets/images/ticket.png"
    },
    {
      imagenPelicula:"../../assets/images/hellboy-cartelera.jpg",
      nombrePelicula:"HELLBOY",
      edadPelicula:"MAYORES DE 15 AÑOS",
      iconoPelicula:"../../assets/images/ticket.png"
    },
    {
      imagenPelicula:"../../assets/images/lallorona-cartelera.jpg",
      nombrePelicula:"LA LLORONA",
      edadPelicula:"MAYORES DE 18 AÑOS",
      iconoPelicula:"../../assets/images/star-red.svg"
    },
    {
      imagenPelicula:"../../assets/images/toy-cartelera.jpg",
      nombrePelicula:"TOY STORY 4",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/images/star-green.svg"
    },
    {
      imagenPelicula:"../../assets/images/dragon-cartelera.jpg",
      nombrePelicula:"COMO ENTRENAR",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/images/ticket.png"
    },
    {
      imagenPelicula:"../../assets/images/glass-cartelera.jpg",
      nombrePelicula:"GLASS",
      edadPelicula:"MAYORES DE 15 AÑOS",
      iconoPelicula:"../../assets/images/ticket.png"
    },
    {
      imagenPelicula:"../../assets/images/ralf-cartelera.jpg",
      nombrePelicula:"RALPH",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/images/ticket.png"
    },
    {
      imagenPelicula:"../../assets/images/mary-cartelera.jpg",
      nombrePelicula:"MARY POPPINS",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/images/ticket.png"
    },
    {
      imagenPelicula:"../../assets/images/dora-cartelera.jpg",
      nombrePelicula:"DORA LA EXPLORADORA",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../assets/images/star-green.svg"
    }

  ];
}         
