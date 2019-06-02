import { Component, OnInit } from '@angular/core';
import { BuscarCajeroService } from 'src/app/servicios/buscar-cajero/buscar-cajero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private readonly _buscarService:BuscarCajeroService,
    private readonly _activatedRoute:ActivatedRoute,
    private readonly _auth:AuthService,
    private readonly _router:Router

    ) { }

  ngOnInit() { 
      //parametros de RUTA .params
    const parametros$ = this._activatedRoute.params;

    //solo en parametros de busqueda o cconsulta 
    //usamos el error y el completado 
    parametros$
    .subscribe(
      (parametros)=>{//cuando las cosads estan bien ->try

        this.nombreEntrenador = parametros.entrenador;
        this.arregloPokemonG = this._buscarService.buscarEntrenador(this.nombreEntrenador);
        this.arregloPokemonE = this.arregloPokemonG.arreglo;
        console.log('hola',this.arregloPokemonE);
        this.arregloPokemonP = this.arregloPokemonG.arreglo.arregloPokemon;

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
  mostrar=false;
  nombreEntrenador;
  numeroPokemon;
  nombrePokemon
  poder1;
  poder2;
  fechaPokemon;
  nivelPokemon;
  arregloPokemonG;
  arregloPokemonP;
  arregloPokemonE;
  nombreBuscarPokemon;

  mostrarFormularioPokemon(evento){
    this.mostrar = evento;

  }
  
  bandera=false;
  crearPokemon(){
    this.arregloPokemonP.find(
      (valor)=>{
        if(valor.nombrePokemon === this.nombrePokemon){
            this.bandera= true;
            return true;
        }else{
          this.bandera= false;
          return false;
        };
      }
    )

      if(this.bandera === true){
        alert('YA EXISTE ESE POKEMON');
      }else{
        console.log(this.arregloPokemonP.push(
          {
            numeroPokemon: this.numeroPokemon,
            nombrePokemon:this.nombrePokemon,
            poderEspecialUno: this.poder1,
            poderEspecialdos:this.poder2,
            fechaCaptura: this.fechaPokemon ,
            nivel: this.nivelPokemon,
          }
        ));
      }
  }
  
  esconder=false;
  arregloPokemonBuscar;
  buscarPokemon(evento){
    if(this.nombreBuscarPokemon != ""){
      this.arregloPokemonBuscar = this._buscarService.buscarPokemon(this.nombreBuscarPokemon,this.arregloPokemonP);
      this.esconder=evento;
    }else{
      this.esconder=false;
    }
  }

  indiceEliminar;
  eliminarPokemon(nombreAEliminar){
    const respuesta = this.arregloPokemonP.forEach(
      (valor,indice)=>{
         if(valor.nombrePokemon === nombreAEliminar){
            this.indiceEliminar = indice;
        }
      });

      this.arregloPokemonP.splice(this.indiceEliminar,1);
      console.log(this.arregloPokemonP);

  }
}
