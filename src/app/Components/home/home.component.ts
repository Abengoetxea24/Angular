import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  // Textos para la parte trasera de las tarjetas
  imagenesCards = [
    { text: 'Texto 1' },
    { text: 'Texto 2' },
    { text: 'Texto 3' },
    { text: 'Texto 4' },
  ];

}

