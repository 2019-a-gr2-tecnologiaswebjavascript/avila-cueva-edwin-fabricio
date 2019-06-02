import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly _authService:AuthService) { }

  ngOnInit() {
  }

  nombreCajero;

  login(){
    this._authService.login(this.nombreCajero);
  }
}
