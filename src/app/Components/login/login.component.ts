import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  $contraseña: string = '';
  $usuario: string = '';

  login(){

    
    if(this.$usuario == 'admin' && this.$contraseña == 'admin'){
      alert('Bienvenido');
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }

}
