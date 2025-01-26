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
  medicos_id = '';
  rescates_id = '';
  index: number | null = null; // Índice del rescatado a editar
  id: number | null = null; // Agregar la propiedad id

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

      // Comprobar si tenemos un parámetro de id para la edición
      this.route.params.subscribe((params) => {
        const id = +params['id'];  // Convertir el id a un número
        if (id) {
          this.id = id;  // Asignar el id recibido de la URL
          this.index = this.rescatados.findIndex(rescatado => rescatado.id === id);
          if (this.index !== -1) {
            const rescatado = this.rescatados[this.index];
            this.nombre = rescatado.nombre;
            this.apellido = rescatado.apellido;
            this.edad = rescatado.edad;
            this.sexo = rescatado.sexo;
            this.procedencia = rescatado.procedencia;
            this.valoracion_medica = rescatado.valoracion_medica;
            this.medicos_id = rescatado.medicos_id;
            this.rescates_id = rescatado.rescates_id;
          }
        }
      });
    });
  }

  guardarRescatado() {
    const rescatado: Rescatado = {
      id: this.index === null ? this.rescatados.length + 1 : this.rescatados[this.index].id,  // Asignar un id único
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      sexo: this.sexo,
      procedencia: this.procedencia,
      valoracion_medica: this.valoracion_medica,
      medicos_id: this.medicos_id,
      rescates_id: this.rescates_id,
    };
  
    if (this.index === null) {
      this.servicesService.agregarRescatado(rescatado);
    } else {
      this.servicesService.actualizarRescatado(this.index, rescatado);
    }
  
    // Navegar de vuelta a la tabla
    this.router.navigate(['/Admin']);
}}
