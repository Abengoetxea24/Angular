import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reto-3';

  /* Variable para controlar la visibilidad del login en el navbar */
  mostrarNavbar:boolean = true;

  //Controlar la visibilidad (.suscribe) llamando al método
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.updateMostrarNavbar();
    });
  }

  // Actualiza la visibilidad del navbar según la ruta
  private updateMostrarNavbar(): void {
    const currentRoute = this.router.url; //Si la ruta no es /login se muestra el navbar
    this.mostrarNavbar = currentRoute !== '/Login'; //Ocultar navbar en login
  }
}
