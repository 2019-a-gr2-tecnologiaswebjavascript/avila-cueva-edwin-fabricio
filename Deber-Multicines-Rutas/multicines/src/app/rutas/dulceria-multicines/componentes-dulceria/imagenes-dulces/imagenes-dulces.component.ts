import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagenes-dulces',
  templateUrl: './imagenes-dulces.component.html',
  styleUrls: ['./imagenes-dulces.component.css']
})
export class ImagenesDulcesComponent implements OnInit {

  @Input()
  urlImagen;

  constructor() { }

  ngOnInit() {
  }

}
