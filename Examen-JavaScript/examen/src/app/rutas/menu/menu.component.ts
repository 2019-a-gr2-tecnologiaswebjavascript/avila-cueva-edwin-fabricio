import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute,
    private readonly _route:Router) { }


  nombreCajero;
 

  ngOnInit() {
      //parametros de RUTA .params
    const parametros$ = this._activatedRoute.params;

    //solo en parametros de busqueda o cconsulta 
    //usamos el error y el completado 
    parametros$
    .subscribe(
      (parametros)=>{//cuando las cosads estan bien ->try
        console.log('Parametros:',parametros.nombre);
        this.nombreCajero = parametros.nombre;
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


  
  administrarGrupos(){
    const url = ['/menu','entrenador'];
    this._route.navigate(url);
  }

}
