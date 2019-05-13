import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //parametros de RUTA .params
    const parametros$ = this._activatedRoute.params;

    //parametros de CONSULTA
    const parametrosConsulta$ = this._activatedRoute.queryParams;
   
    //en parametros de CONSULTA y RITA no es necesatio poner el catch y complete
    parametrosConsulta$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros consulta:', parametrosConsulta);
      }
    )

    //solo en parametros de busqueda o cconsulta 
    //usamos el error y el completado 

    parametros$
    .subscribe(
      (parametros)=>{//cuando las cosads estan bien ->try
        console.log('Parametros:',parametros);
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

}
