import { Injectable } from '@angular/core';

@Injectable()
export class CarritoService{
    //carritoCompras=[];
    cantidadHotdog=1;
    cantidadHamburguesas=1;
    cantidadPapitas=1;
    cantidadEmpanadas=1;
    cantidadMotes=1;
    cantidadFritadas=1;
    
    agregarItemCarrito(itemCarrito){
        if(itemCarrito.valor === 'Hot Dog'){
            itemCarrito['cantidad'] = this.cantidadHotdog++;   
        }else if(itemCarrito.valor === 'Hamburguesas'){
            itemCarrito['cantidad'] = this.cantidadHamburguesas++;
        }else if(itemCarrito.valor === 'Papitas'){
            itemCarrito['cantidad'] = this.cantidadPapitas++;
        }else if(itemCarrito.valor === 'Empanadas'){
            itemCarrito['cantidad'] = this.cantidadEmpanadas++;
        }else if(itemCarrito.valor === 'Motes'){
            itemCarrito['cantidad'] = this.cantidadMotes++;
        }else if(itemCarrito.valor === 'Fritadas'){
            itemCarrito['cantidad'] = this.cantidadFritadas++;
        }
        console.log(itemCarrito);
    }
 
}