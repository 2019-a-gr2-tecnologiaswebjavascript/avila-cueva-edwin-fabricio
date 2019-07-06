import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';
import { Producto } from 'src/app/dto/producto';
import { ProductoHttpService } from '../producto-http.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CarritoService{

    constructor(private readonly _httpProductoService:ProductoHttpService,
                private readonly httpClient: HttpClient){

    }
    carritoCompras:ItemCarritoCompras[] = [];
    
    /*
    agregarCarritoDeCompras(itemCarrito:ItemCarritoCompras):ItemCarritoCompras[]{
        const identificador = itemCarrito.valor;
        const identificadorNombreTienda = itemCarrito.nombreTienda;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some(
            (item:ItemCarritoCompras, indice)=>{
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

    private anadirAlContador(indice:number){
        this.carritoCompras[indice].cantidad++;
    }
    private anadirAlCarrito(item:ItemCarritoCompras){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }
    */

   agregarCarritoDeCompras(itemCarrito:Producto){
        const buscarPorId$ = this._httpProductoService.buscarPorId(itemCarrito.id);
        buscarPorId$
                .subscribe(
                    (dato)=>{
                        dato.cantidad++;
                        const productoActulizar = this._httpProductoService.actualizar(dato.id,dato);
                        productoActulizar.subscribe(
                            (dato)=>{
                                console.log('Se actualizo exitosamente');
                            },
                            (error)=>{
                                console.log('Hubo un error al actualizar');
                            }
                        )
                    },
                    (error)=>{
                        itemCarrito.cantidad = 1 ;
                        const crearProducto$ = this._httpProductoService.crear(itemCarrito);
                        crearProducto$.subscribe(
                            (dato)=>{
                                console.log('Se almaceno en la Base de datos');
                            },
                            (error)=>{
                                console.log('Hubo un error al ingresar el producto');
                            }
                        )
                    }
                )
   }






}


/*
const respuestaFind = [1,2,3,4].find(
    (valor:number):boolean => {
        return valor == 3; // Expresion ! a < b b==c 
    });
    console.log(respuestaFind);

//SOME -> OR -> si es que almenos existe uno 
const respuestaSome = [1,2,3,4].some(//devuelve un booleano
    (valor:number):boolean => {
        return valor == 3; // HAY ALGUN 3?
    });
    console.log(respuestaSome);

//EVERY TODOS SON 3 ? -> si no se cumple en todas las iteracione ses falso
const respuestaEvery = [1,2,3,4].every(//devuelve un booleano
    (valor:number):boolean => {
        return valor > 0; // Todos son mayor que 0?
    });
    console.log(respuestaEvery);



FOR EACH
const respuesta = [1,2,3,4].forEach( //devuelve undefined 
    (valor:number) => {
        console.log('valor: ',valor);
        if (valor==1){
            console.log('Te encontre 1 !!');
        }
    }    
);
console.log(respuesta);


OPCION 2 
[1,2,3,4].forEach(
    function (valor,indice,arreglo){
        console.log('valor: ',valor);
        if (valor==1){
            console.log('Te encontre 1 !!');
        }
    }    
);

OPCION 1
function busqueda(valor,indice,arreglo){
    console.log('valor: ',valor);
    if (valor==1){
        console.log('Te encontre 1 !!');
    }

}

//////////////////////////
Metodos para buscar
*FIND 
    [1,2,3].find()


*/