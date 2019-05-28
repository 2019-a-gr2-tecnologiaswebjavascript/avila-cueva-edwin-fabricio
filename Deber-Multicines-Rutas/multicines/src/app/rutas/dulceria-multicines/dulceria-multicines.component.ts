import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dulceria-multicines',
  templateUrl: './dulceria-multicines.component.html',
  styleUrls: ['./dulceria-multicines.component.css']
})
export class DulceriaMulticinesComponent implements OnInit {

  arregloDulces=[
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_32.jpg',
    },
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_33.jpg',
    },
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_34.jpg',
    },
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_35.jpg',
    },
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_36.jpg',
    },
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_38.jpg',
    },
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_39.jpg',
    },
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_40.jpg',
    },
    {
      urlImagen: '../../../../../assets/imagenes/Dulc_41.jpg',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
