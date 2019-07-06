import { HttpSailsPrincipal } from './http-sails-principal';
import { Producto } from '../dto/producto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export class ProductoHttpService extends HttpSailsPrincipal<Producto>{
    constructor (private readonly _httpClient: HttpClient){
        super(_httpClient,environment.url,'/Producto');
    }
}