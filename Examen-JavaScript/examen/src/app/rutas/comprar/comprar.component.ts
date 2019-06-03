import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { BuscarCajeroService } from 'src/app/servicios/buscar-cajero/buscar-cajero.service';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { FacturaService } from 'src/app/servicios/factura.service';

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
  costoTotal:number;
  totalCompra:number = 0;
  arregloNombreEntrenadoresComprados=[];
  arregloCarrito;
  rutaRevisar=[];
  

  //Factura
  nombreUsuario;
  cedula;
  telefono;
  direccion;
  correo;


  constructor(private readonly _activatedRoute:ActivatedRoute,
    private readonly _carritoService:CarritoService,
    private readonly _buscarService:BuscarCajeroService,
    private readonly _router:Router,
    private readonly _auth:AuthService,
    private readonly _factura:FacturaService) { }

  ngOnInit() {
    this.nombreCajero=this._auth.nombreCajeroLogin;
    this.arregloContieneGeneral = this._buscarService.buscarCajero(this.nombreCajero); 
    console.log('general',this.arregloContieneGeneral.arreglo.nombreCajero);
    this.arregloEntrenadores = this.arregloContieneGeneral.arreglo.arregloEntrenador;
    console.log('entrnadores',this.arregloEntrenadores);
    //this.arregloPokemons = this.arregloContieneGeneral.arreglo.arregloEntrenador[1].arregloPokemon;
    //console.log('pokemos', this.arregloPokemons)

    
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
 
  agregarCarrito(nombreEntrenadorItem){
    const respuestaCosto = this._buscarService.arregloCosto.find(
      (valor):any=>{
        return valor.nombreEntrenador === nombreEntrenadorItem;
      }
    );
    this.costoTotal = respuestaCosto.costoTotal;
    this.totalCompra += this.costoTotal;
    const arregloCarrito={
      nombreEntrenador:nombreEntrenadorItem,
    }
    const respuestaCarrito = this._carritoService.agregarCarritoDeCompras(arregloCarrito);
    console.log('carito de comra',this._carritoService.carritoCompras);
    this.arregloCarrito=this._carritoService.carritoCompras;
  }

  eliminarCarrito(nombreEntrenadorItem){
    const respuestaCosto = this._buscarService.arregloCosto.find(
      (valor):any=>{
        return valor.nombreEntrenador === nombreEntrenadorItem;
      }
    );
    this.costoTotal = respuestaCosto.costoTotal;
    this.totalCompra -= this.costoTotal;
    if(this.totalCompra === 0){
      this.totalCompra=0;
      alert('NO TIENES NADA EN EL CARRO');
    }
    const arregloCarrito={
      nombreEntrenador:nombreEntrenadorItem,
    }
    const respuestaCarrito = this._carritoService.eliminarDelCarrito(arregloCarrito);
  }

  finalizarCompra(){

    const arregloGeneralFactura={
        nombreCajeroFact:this.nombreCajero,
        nombreComprador:this.nombreUsuario,
        total:this.totalCompra,
    };
    this._factura.guardarFactura(arregloGeneralFactura);
    this.rutaRevisar=['/menu',this.nombreCajero,'revisar'];
    this._router.navigate(this.rutaRevisar);
  }


}
