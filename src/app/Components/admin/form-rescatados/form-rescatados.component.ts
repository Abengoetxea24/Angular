import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rescatado, ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-form-rescatados',
  templateUrl: './form-rescatados.component.html',
  styleUrls: ['./form-rescatados.component.scss'],
})
export class FormRescatadosComponent implements OnInit {
  nombre = '';
  apellido = '';
  edad = '';
  sexo = '';
  procedencia = '';
  valoracion_medica = '';
  medico_id = '';
  rescate_id = '';
  index: number | null = null; // Índice del rescatado a editar
  rescatados: Rescatado[] = []; // Lista local de rescatados

  constructor(
    private servicesService: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Cargar rescatados desde el servicio
    this.servicesService.cargarRescatados();

    // Suscribirse al observable para actualizar la lista local
    this.servicesService.rescatados$.subscribe((data) => {
      this.rescatados = data;
    });

    // Rellenar datos del formulario si se edita un rescatado
    this.route.queryParams.subscribe((params) => {
      if (params['index'] !== undefined) {
        this.index = +params['index'];
        const rescatado = this.rescatados[this.index];
        if (rescatado) {
          this.nombre = rescatado.nombre;
          this.apellido = rescatado.apellido;
          this.edad = rescatado.edad;
          this.sexo = rescatado.sexo;
          this.procedencia = rescatado.procedencia;
          this.valoracion_medica = rescatado.valoracion_medica;
          this.medico_id = rescatado.medico_id;
          this.rescate_id = rescatado.rescate_id;
        }
      }
    });
  }

  // Guardar un nuevo rescatado o actualizar uno existente
  guardarRescatado() {
    const rescatado: Rescatado = {
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
      this.servicesService.agregarRescatado(rescatado);
    } else {
      this.servicesService.actualizarRescatado(this.index, rescatado);
    }

    // Navegar de vuelta a la tabla
    this.router.navigate(['/Admin']);
  }
}
