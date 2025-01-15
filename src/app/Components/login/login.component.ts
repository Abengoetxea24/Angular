import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}

  contrasena: string = '';
  usuario: string = '';

  login(){

    
    if(this.usuario == 'admin' && this.contrasena == 'admin'){
      this.router.navigate(['/Admin']);
    }else{
      this.router.navigate(['/Home']);

    }
  }

}
