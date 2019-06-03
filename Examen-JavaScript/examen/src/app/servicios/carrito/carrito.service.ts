import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  carritoCompras= [];
    
    agregarCarritoDeCompras(itemCarrito){
        const identificador = itemCarrito.nombreEntrenador;
        const identificadorNombreTienda = itemCarrito.nombreTienda;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some(
            (item, indice)=>{
                if(item.valor == identificador && item.nombreTienda == identificadorNombreTienda){
                    indiceItem = indice;
                    return true;
                }else{
                    return false;
                }
                
            }
        )
        if(existeElItem){
            this.anadirAlContador(indiceItem);
           
        }else{
            this.anadirAlCarrito(itemCarrito);
        }
        console.log('Se añadio al carrito',itemCarrito);
        return this.carritoCompras;
    }

    private anadirAlContador(indice){
        this.carritoCompras[indice].cantidad++;
    }
    private anadirAlCarrito(item){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }
}
