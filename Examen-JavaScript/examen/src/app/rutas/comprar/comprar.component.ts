import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { BuscarCajeroService } from 'src/app/servicios/buscar-cajero/buscar-cajero.service';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {


  nombreCajero;
  arregloContieneGeneral;
  arregloNombreCajero;
  arregloEntrenadores;
  arregloPokemons;
  arregloPokemonEntrenador;
  ver=true;
  nombreEntrenador;
  arregloPokemonPorEntrenador;
  costoTotal;

  constructor(private readonly _activatedRoute:ActivatedRoute,
    private readonly _carritoService:CarritoService,
    private readonly _buscarService:BuscarCajeroService,
    private readonly _auth:AuthService) { }

  ngOnInit() {
    this.nombreCajero=this._auth.nombreCajeroLogin;
    this.arregloContieneGeneral = this._buscarService.buscarCajero(this.nombreCajero); 
    console.log('general',this.arregloContieneGeneral.arreglo.nombreCajero);
    this.arregloEntrenadores = this.arregloContieneGeneral.arreglo.arregloEntrenador;
    console.log('entrnadores',this.arregloEntrenadores);
    this.arregloPokemons = this.arregloContieneGeneral.arreglo.arregloEntrenador[1].arregloPokemon;
    console.log('pokemos', this.arregloPokemons)

    
  }

  listarProductos(nombre){
    const respuestaCosto = this._buscarService.arregloCosto.find(
      (valor):any=>{
        return valor.nombreEntrenador === nombre;
      }
    );
    this.costoTotal = respuestaCosto.costoTotal;

    this.ver = false; 
    const respuesta = this.arregloEntrenadores.find(
      (valor)=>{
        return valor.nombreEntrenador === nombre;
      }
    )
    this.arregloPokemonPorEntrenador = respuesta.arregloPokemon;
  }
 
  /*agregarCarrito(nombreEntrenadorItem){
    const respuestaCarrito = this._carritoService.agregarCarritoDeCompras(nombreEntrenadorItem);
  }*/
  


}
