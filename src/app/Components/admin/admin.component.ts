import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service'; // Importamos el servicio para acceder a los datos

@Component({
  selector: 'app-admin', // Selector para utilizar este componente en el HTML
  templateUrl: './admin.component.html', // Archivo HTML asociado
  styleUrls: ['./admin.component.scss'], // Archivo SCSS asociado
})
export class AdminComponent implements OnInit {
  rescatados: any[] = []; // Lista de rescatados que se mostrará en la tabla
  displayedColumns: string[] = ['nombre', 'edad', 'acciones']; // Columnas que se mostrarán en la tabla
  constructor(private servicesService: ServicesService) {} 
  // Inyectamos el servicio en el constructor para acceder a los métodos y observables

  ngOnInit() {
    // Nos suscribimos al observable `rescatados$` para obtener los datos en tiempo real
    this.servicesService.rescatados$.subscribe((data) => {
      this.rescatados = data; // Actualizamos la lista local cada vez que cambien los datos en el servicio
    });
  }

  // Método para eliminar un rescatado según su índice
  eliminarRescatado(index: number) {
    this.servicesService.eliminarRescatado(index); // Llamamos al método del servicio para eliminarlo
  }
}