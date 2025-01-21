import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isScrolled: boolean = false; // Comprobar si se ha hecho scroll

  // Detecta el scroll
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Comprobar si el scroll ha pasado cierta cantidad (ejemplo: 100px)
    if (window.scrollY > 50) {
      this.isScrolled = true; // Cambia el estado cuando se ha desplazado
    } else {
      this.isScrolled = false; // Restaura el estado cuando el scroll es pequeño
    }
  }
}

