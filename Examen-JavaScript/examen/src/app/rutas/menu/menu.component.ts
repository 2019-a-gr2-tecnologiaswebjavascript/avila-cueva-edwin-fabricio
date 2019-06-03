import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute,
    private readonly _router:Router,) { }


  nombreCajero;
  rutaEntrenador;
  rutaComprar;
  rutaMenu;
  rutaRevisar;
  mostrar=false;
  condicion=true;
  ngOnInit() {
      //parametros de RUTA .params
    const parametros$ = this._activatedRoute.params;

    //solo en parametros de busqueda o cconsulta 
    //usamos el error y el completado 
    parametros$
    .subscribe(
      (parametros)=>{//cuando las cosads estan bien ->try
        this.nombreCajero = parametros.nombre;
        this.rutaMenu=['/menu',this.nombreCajero];
        this.rutaEntrenador=['/menu',this.nombreCajero,'entrenador'];
        this.rutaComprar=['/menu',this.nombreCajero,'comprar'];
        this.rutaRevisar=['/menu',this.nombreCajero,'revisar'];
      },
      (error)=>{ //cuando las cosas estan mal ->catch
        console.log('Error',error);
      },
      ()=>{//es como el  finally que termina de hacer todo
            // y al ultimo ejecuta esto ->finally
        console.log('Completo');
      }
    )

  }

  mostrarBotonesAdministrar(evento){
    this.mostrar= evento;
    this._router.navigate(this.rutaEntrenador);
    this.condicion= false; 
  }

  mostrarBotonesComprar(evento){
    this.mostrar=evento;
    this._router.navigate(this.rutaComprar);
    this.condicion= true; 
  }

  mostrarBotonesRevisar(evento){
    this.mostrar=evento;
    this._router.navigate(this.rutaRevisar);
  }
  mostrarMenu(evento){
    this.mostrar=evento;
    this._router.navigate(this.rutaMenu);
  }
 

}
