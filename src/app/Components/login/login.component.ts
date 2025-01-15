import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  contrasena: string = '';
  usuario: string = '';

  login(){

    
    if(this.usuario == 'admin' && this.contrasena == 'admin'){
      alert('Bienvenido');
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }

}
