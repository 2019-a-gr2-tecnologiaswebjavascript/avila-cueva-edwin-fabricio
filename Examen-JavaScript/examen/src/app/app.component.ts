import { Component } from '@angular/core';
import { AuthService } from './servicios/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen'; 

  constructor(private readonly _authService:AuthService) { }
  logout(){
    console.log('Saliendo del sistema');
    this._authService.logout();
  }
}
