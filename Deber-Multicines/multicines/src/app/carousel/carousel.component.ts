import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  url="../../assets/images/capitana-marvel.jpg";
  mostrar=false;

  constructor() { }

  cambiarIzquierda(evento:Boolean){
    const urlCaptain = "../../assets/images/capitana-marvel.jpg";
    const urlAvengers = "../../assets/images/avengers-end-game.jpg";
    const urlShazam ="../../assets/images/shazam.jpg" ;
    if(evento === true && this.url === urlCaptain){
      this.url = urlShazam; 
    }else if(evento === true && this.url === urlShazam){
      this.url = urlAvengers; 
    }else if (evento === true && this.url === urlAvengers){
      this.url = urlCaptain;
    }
    
  }
  cambiarDerecha(evento:Boolean){
    const urlCaptain = "../../assets/images/capitana-marvel.jpg";
    const urlAvengers = "../../assets/images/avengers-end-game.jpg";
    const urlShazam ="../../assets/images/shazam.jpg" ;
    if(evento === true && this.url === urlCaptain){
      this.url = urlAvengers; 
    }else if(evento === true && this.url === urlAvengers){
      this.url = urlShazam; 
    }else if (evento === true && this.url === urlShazam){
      this.url = urlCaptain;
    }
  }

  aparecerBotones(mostrar){
      this.mostrar = mostrar;
  }

 
  ngOnInit() {
  }

}
