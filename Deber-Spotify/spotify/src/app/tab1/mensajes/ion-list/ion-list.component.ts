import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-list',
  templateUrl: './ion-list.component.html',
  styleUrls: ['./ion-list.component.scss'],
})
export class IonListComponent implements OnInit {

  arregloPersonas = [
    {
      nombre:"Chris Hemsworth",
      avatar:"http://www1.pictures.zimbio.com/bg/2010+GQ+Men+of+the+Year+Party+Li4Tg1jPV6vx.jpg",
      imagen:"https://bucket1.glanacion.com/anexos/fotos/cartelera/guardianes-de-la-galaxia-vol-2-7299gr.jpg",
      likes:"104,506 likes",
      cuenta:"chris_hems",
      descripcion: "Asgardians of the galaxy... JAJA I´m the captain, Sorry Star Lord",
      ultimaConexion:"Active 59m ago"
    },
    {
      nombre:"Lilly Collins",
      avatar:"https://i1.wp.com/elanillounico.com/wp-content/uploads/2017/09/Lily-Collins-Kevin-Winter-Getty-Images-North-America-copia.jpg?fit=300%2C300",
      imagen:"https://www.jckonline.com/wp-content/uploads/2019/05/Lily-Collins-Met-Ball.jpg",
      likes:"54,586 likes",
      cuenta:"lilly_collins",
      descripcion: "I love it",
      ultimaConexion:"Active 19m ago"
    },
    {
      nombre:"Jessica López",
      avatar:"https://img.gestion.pe/files/ec_article_multimedia_gallery/uploads/2018/10/24/5bd0e64b77be9.jpeg",
      imagen:"https://i.pinimg.com/originals/03/39/23/033923ebf372701148b5a7c5e527a6ea.jpg",
      likes:"12 likes",
      cuenta:"jesselope98",
      descripcion: "Qué tengan un lindo día",
      ultimaConexion:"Active now"
    },
    {
      nombre:"Jhon Frick",
      avatar:"http://1.bp.blogspot.com/_iDjXcVdhthk/Srf8dkEFIDI/AAAAAAAAAB4/0P7sVbrD_RI/s400/foto2.JPG",
      imagen:"https://static.ellahoy.es/ellahoy/fotogallery/1200X0/413673/fotos-con-el-anillo-de-compromiso.jpg",
      likes:"415 likes",
      cuenta:"frick_john78",
      descripcion: "TE AMO <3",
      ultimaConexion:"Active 2w ago"
    },
    {
      nombre:"Domenique Lesly",
      avatar:"https://i.pinimg.com/originals/88/f2/01/88f201b5f5ecf905a3d51ff26512a759.png",
      imagen:"https://i.pinimg.com/736x/ba/4c/97/ba4c972a58b53d6cdd6eb4c132d1e576.jpg",
      likes:"4,566 likes",
      cuenta:"lesy_15",
      descripcion: "Hellow, Im a single. I love all",
      ultimaConexion:"Active 15m ago"
    },
    {
      nombre:"Jackie Chan",
      avatar:"https://www.famousbirthdays.com/headshots/jackie-chan-7.jpg",
      imagen:"http://www.nosolocine.es/images/galeria/53654.jpg",
      likes:"345,124 likes",
      cuenta:"jackie_chan",
      descripcion: "Reboot de Pareja Explosiva",
      ultimaConexion:"Active 5m ago"
    },

  ];  
  nombrePersona;
  rutaMensaje;
  eventoNombrePersona(nombre){
    this.nombrePersona = nombre; 
    this.rutaMensaje=['/mensaje',this.nombrePersona];
  }


 
  
  constructor() { }

  ngOnInit() {}


}

