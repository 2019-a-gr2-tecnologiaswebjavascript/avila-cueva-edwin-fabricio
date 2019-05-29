import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-inicio-multicines',
  templateUrl: './inicio-multicines.component.html',
  styleUrls: ['./inicio-multicines.component.css']
})
export class InicioMulticinesComponent implements OnInit {

  arregloPeliculas = [
    {
      imagenPelicula:"../../../assets/imagenes/avengers-cartelera.jpg",
      nombrePelicula:"AVENGERS END GAME",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../../assets/imagenes/star-red.svg",
      videoPelicula:'VhCUoIuC5zs'
    },
    {
      imagenPelicula:"../../../assets/imagenes/pikachu-cartelera.jpg",
      nombrePelicula:"DETECTIVE PIKACHU",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../../assets/imagenes/star-red.svg",
      videoPelicula:'V31OIBUzGcs'
    },
    {
      imagenPelicula:"../../../assets/imagenes/capitana-cartelera.jpg",
      nombrePelicula:"CAPITANA MARVEL",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../../assets/imagenes/ticket.png",
      videoPelicula:'sE67uodyRfI'
    },
    {
      imagenPelicula:"../../../assets/imagenes/dumbo-cartelera.jpg",
      nombrePelicula:"DUMBO",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../../assets/imagenes/star-red.svg",
      videoPelicula:'wVpR21M6lqs'
    },
    {
      imagenPelicula:"../../../assets/imagenes/shazam-cartelera.jpg",
      nombrePelicula:"SHAZAM",
      edadPelicula:"MAYORES DE 12 AÑOS",
      iconoPelicula:"../../../assets/imagenes/ticket.png",
      videoPelicula:'B_DpkUSH2Mk'
    },
    {
      imagenPelicula:"../../../assets/imagenes/hellboy-cartelera.jpg",
      nombrePelicula:"HELLBOY",
      edadPelicula:"MAYORES DE 15 AÑOS",
      iconoPelicula:"../../../assets/imagenes/ticket.png",
      videoPelicula:'ZsBO4b3tyZg'
    },
    {
      imagenPelicula:"../../../assets/imagenes/lallorona-cartelera.jpg",
      nombrePelicula:"LA LLORONA",
      edadPelicula:"MAYORES DE 18 AÑOS",
      iconoPelicula:"../../../assets/imagenes/star-red.svg",
      videoPelicula:'WJ2YlFrAx6I'
    },
    {
      imagenPelicula:"../../../assets/imagenes/toy-cartelera.jpg",
      nombrePelicula:"TOY STORY 4",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../../assets/imagenes/star-green.svg",
      videoPelicula:'f33yJZ5uOpU'
    },
    {
      imagenPelicula:"../../../assets/imagenes/dragon-cartelera.jpg",
      nombrePelicula:"COMO ENTRENAR",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../../assets/imagenes/ticket.png",
      videoPelicula:'hV-CqyvFX0o'
    },
    {
      imagenPelicula:"../../../assets/imagenes/glass-cartelera.jpg",
      nombrePelicula:"GLASS",
      edadPelicula:"MAYORES DE 15 AÑOS",
      iconoPelicula:"../../../assets/imagenes/ticket.png",
      videoPelicula:'8aLVcGPYoN4'
    },
   
    {
      imagenPelicula:"../../../assets/imagenes/mary-cartelera.jpg",
      nombrePelicula:"MARY POPPINS",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../../assets/imagenes/ticket.png",
      videoPelicula:'fkn5mBVEZuA'
    },
    {
      imagenPelicula:"../../../assets/imagenes/dora-cartelera.jpg",
      nombrePelicula:"DORA LA EXPLORADORA",
      edadPelicula:"TODO PÚBLICO",
      iconoPelicula:"../../../assets/imagenes/star-green.svg",
      videoPelicula:'uk0zlFhSnF4'
    }
  ];

  nombrePeliculaModal;
  videoPeliculaModal;

  constructor(private readonly _sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
  }

  cambioNombre(arregloPelicula){
    this.nombrePeliculaModal = arregloPelicula.nombrePelicula;
    this.videoPeliculaModal = arregloPelicula.videoPelicula;
  }

  getVideoIframe(url) {
    var video;
    video = url;
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }


}
