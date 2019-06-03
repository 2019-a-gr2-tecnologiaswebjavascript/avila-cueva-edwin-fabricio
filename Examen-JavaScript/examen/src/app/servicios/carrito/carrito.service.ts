import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from 'src/app/interfaces/item-carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  carritoCompras:ItemCarritoCompras[]=[];
    
    agregarCarritoDeCompras(arreglo){
        const identificador = arreglo.nombreEntrenador;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some(
            (item, indice)=>{
                if(item.nombreEntrenador == identificador){
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
            this.anadirAlCarrito(arreglo);
        }
        console.log('Se añadio al carrito',arreglo);
        return this.carritoCompras;
    }

    private anadirAlContador(indice){
        this.carritoCompras[indice].cantidad++;
    }
    private anadirAlCarrito(item){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }
    
    eliminarDelCarrito(arreglo){
        const identificador = arreglo.nombreEntrenador;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some(
            (item, indice)=>{
                if(item.nombreEntrenador == identificador){
                    indiceItem = indice;
                    return true;
                }else{
                    return false;
                }
                
            }
        )
        if(existeElItem){
            this.quitarContador(indiceItem);
           
        }else{
            this.quitarDelCarrito(arreglo);
        }
        console.log('Se añadio al carrito',arreglo);
        return this.carritoCompras;

    }

    private quitarContador(indice){
        this.carritoCompras[indice].cantidad--;
    }
    private quitarDelCarrito(item){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }
}
