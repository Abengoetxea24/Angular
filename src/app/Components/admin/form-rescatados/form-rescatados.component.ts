import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service'; // Importamos el servicio para manejar los datos

@Component({
  selector: 'app-form-rescatados',
  templateUrl: './form-rescatados.component.html',
  styleUrls: ['./form-rescatados.component.scss'],
})
export class FormRescatadosComponent implements OnInit {
  // Propiedades del formulario
  nombre = '';
  apellido = '';
  edad = '';
  sexo = '';
  procedencia = '';
  valoracion_medica = '';
  medico_id = '';
  rescate_id = '';
  index: number | null = null; // Índice del rescatado a editar (nulo si es un nuevo rescatado)
  rescatados: any[] = []; // Lista de rescatados que se mostrará en la tabla


  constructor(
    private servicesService: ServicesService, // Servicio inyectado
    private route: ActivatedRoute, // Para acceder a los parámetros de la URL
    private router: Router // Para navegar entre rutas
  ) {}

  ngOnInit() {
    // Obtenemos el índice del rescatado de los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      if (params['index'] !== undefined) {
        this.index = +params['index']; // Convertimos el índice a número
        const rescatado = this.servicesService.getRescatados()[this.index];
        // Rellenamos los campos del formulario con los datos del rescatado
        this.nombre = rescatado.nombre;
        this.apellido = rescatado.apellido;
        this.edad = rescatado.edad;
        this.sexo = rescatado.sexo;
        this.procedencia = rescatado.procedencia;
        this.valoracion_medica = rescatado.valoracion_medica;
        this.medico_id = rescatado.medico_id;
        this.rescate_id = rescatado.rescate_id;
      }
    });
      // Nos suscribimos al observable `rescatados$` para obtener los datos en tiempo real
      this.servicesService.rescatados$.subscribe((data) => {
        this.rescatados = data; // Actualizamos la lista local cada vez que cambien los datos en el servicio
      });
  }
  


  // Método para guardar (añadir o actualizar) el rescatado
  guardarRescatado() {
    const rescatado = {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      sexo: this.sexo,
      procedencia: this.procedencia,
      valoracion_medica: this.valoracion_medica,
      medico_id: this.medico_id,
      rescate_id: this.rescate_id,
    };

    if (this.index === null) {
      // Si no hay índice, agregamos un nuevo rescatado
      this.servicesService.agregarRescatado(rescatado);
    } else {
      // Si hay índice, actualizamos el rescatado existente
      this.servicesService.actualizarRescatado(this.index, rescatado);

    }

    // Navegamos de vuelta a la página de la tabla
    this.router.navigate(['/Admin']);
  }
}