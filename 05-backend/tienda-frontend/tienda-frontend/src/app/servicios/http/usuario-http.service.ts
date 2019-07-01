import { HttpSailsPrincipal } from './htpp-sails.principal';
import { Usuario } from '../../dto/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Injectable()
export class UsuarioHttpService extends HttpSailsPrincipal<Usuario>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,'/Usuario')
    }

}