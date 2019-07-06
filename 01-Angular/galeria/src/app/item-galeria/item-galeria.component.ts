import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';
import {ItemCarritoCompras} from '../interfaces/item-carrito-compras'
import { HttpClient } from '@angular/common/http';
import { ProductoHttpService } from '../servicios/producto-http.service';
import { Producto } from '../dto/producto';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit , OnDestroy {

  title = 'Licoreria';

  

  @Input()
  titulo;
  
  //habilitamos que pueda ingresar un nombre del item
  @Input()
  nombreItem;

  @Input()
  textoBoton;

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter()
  
  @Output()
  cambioCerveza:EventEmitter<boolean> = new EventEmitter()
  
  url = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg"

  @Input()
  notas;

  //Nos va ayudar hacer el dependendy -> inyectar dependencias 
  //Injection -> que
  //Injection de dependecias
  //inyectar servicios en componentes y servicios 
  //compartir un servicio en varios componentes 
  //SERVICIOS -> COMPARTIDOS-> USAR VARIOS SERVICIOS EN UN COMPONENTE  
  constructor(private readonly _carritoService:CarritoService) {
  }

  alertar(){
    alert('Auxilio me desmayo: '+this.nombreItem)
  }

  alertarBlur(){
    alert('Alertar blur');
  }

  cambiarImagen(){
    //usar const
    //nunca vamos a usar VAR
    //el LET permite deja reasignar 
    const cervezas="http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg";
    const chelas="http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";
    if(this.url === cervezas){
      this.url = chelas; 
      this.cambioChela.emit(true);
    }else{
      this.url = cervezas;
      this.cambioCerveza.emit(true);
    }
    
  }
  ngOnInit() {
    console.log("'Empezo'");
    //console.log(this._carritoService.carritoCompras);




  }
  
  ngOnDestroy() {
    console.log("'Termino'");
  }

  
  agregarCarrito(valorCarrito:string, idComida:number){
 
    const itemCarrito:Producto={
      id: idComida,
      valor:valorCarrito,
      nombreTienda: this.titulo,
      fechaCompra: new Date()
    }
    const respuestaCarrito = this._carritoService.agregarCarritoDeCompras(itemCarrito);
  }
  /*agregarCarrito(valorCarrito:string){
    const itemCarrito:ItemCarritoCompras={
      valor:valorCarrito,
      nombreTienda: this.titulo,
      fechaCompra: new Date()
    }
    const respuestaCarrito = this._carritoService.agregarCarritoDeCompras(itemCarrito);
    //this._carritoService.carritoCompras.splice(0,0,itemCarrito);
    //this._carritoService.agregarItemCarrito(itemCarrito);
    console.log (respuestaCarrito);
  }*/

}


/*
class CarritoCompraClase implements CarritoCompraClaseInterface{
  valor:string;
  nombreTienda:string;
  fechaCompra?:Date;
}
*/
/*
Deber
Problema cuando agregue un item al arreglo, debo de guardar su cantidad.
En el item nos hace falta la cantidad.
id -> valor 
1)verificar si existe ese "item" el valor 
  1.1 Existe 
      Aumentamos el contador
      Existe?->si esxiste debemos de  buscar en el arreglo
  1.2  No existe
      creamos el contador y lo seteamos en 1


*/


/*  ciclo de vida del componente
ngOnInit -> onInit -> va a empezar como una nueva instancia 
Vivir 

ngOnDestroy -> OnDestroy -> deja de existir y ya no esta en memoria
Morir 
*/

/*
-RUTA -> LOGIN/MODULOS/ETC -> ruta principal para que se comuniquen cn todos los hijos 
-PAPA []-> property binding para comunicar con el hijo []-> para comunicar con al hija 
 -HIJO [] -> property binding para comunicar con el nieto evento()->papa
    -NIETO -> ()evento para comunicar con el hijo
  -HIJA
    -NIETA 
-TIO 
  -PRIMO


-------------------------
# -> Es un modulo
* -> Componente 
- -> Servicio

#ModuloPrincipal (AppModule)--> que contiene a todos
  *ComponentePrincipal (AppComponent)
.......................................
Tenemos otro modulo fuera del proyecto

#ModuloNotas (NotasModule)
  *TablaMostrarMateria
    ¿Qué necisitamos que nos mande desde afuera?
    _ [] notasPorMateria ->PropetyBinding-> Adentro la materia, la nota
    USAR EL MISMO BOTON PERO DIFERENTE PROPOSITO
    Administrador :cuando demos click a las notas se le envia un correo al papá 
    Estudiante : da en el boton y entra a redes sociales
    _ [] nombreBoton
    _ [] iconoBoton
    _ () ejecutoAccion
  
  *ListarMaterias
    ->el mismo busque las materias  
    _ () seleccionoMateria


  [Javascript] -> emitir ()-> seleccionoJavaScript



*/