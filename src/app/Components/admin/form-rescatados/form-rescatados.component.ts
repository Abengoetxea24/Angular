import { Component } from '@angular/core';

// Definición de la interfaz
interface Rescatado {
  nombre: string;
  apellido: string;
  edad: string;
  sexo: string;
  procedencia: string;
  valoracion_medica: string;
  medico_id: string;
  rescate_id: string;
}

@Component({
  selector: 'app-form-rescatados',
  templateUrl: './form-rescatados.component.html',
  styleUrls: ['./form-rescatados.component.scss']
})
export class FormRescatadosComponent {
  // Propiedades del formulario
  nombre = '';
  apellido = '';
  edad = '';
  sexo = '';
  procedencia = '';
  valoracion_medica = '';
  medico_id = '';
  rescate_id = '';

  // Lista de rescatados
  rescatados: Rescatado[] = [
    { nombre: "Juan", apellido: "Perez", edad: "30", sexo: "M", procedencia: "Madrid", valoracion_medica: "Buena", medico_id: "1", rescate_id: "101" },
    { nombre: "Maria", apellido: "Gomez", edad: "25", sexo: "F", procedencia: "Barcelona", valoracion_medica: "Regular", medico_id: "2", rescate_id: "102" }
  ];

  // Índice del rescatado seleccionado para edición (-1 si no hay ninguno)
  rescatadoSeleccionado: number = -1;

  // Método para agregar o editar un rescatado
  crearRescatado() {
    const nuevoRescatado: Rescatado = {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      sexo: this.sexo,
      procedencia: this.procedencia,
      valoracion_medica: this.valoracion_medica,
      medico_id: this.medico_id,
      rescate_id: this.rescate_id
    };

    if (this.rescatadoSeleccionado === -1) {
      // Crear un nuevo rescatado
      this.rescatados.push(nuevoRescatado);
    } else {
      // Editar el rescatado seleccionado
      this.rescatados[this.rescatadoSeleccionado] = nuevoRescatado;
    }

    // Limpiar el formulario
    this.limpiarFormulario();
  }

  // Método para cargar un rescatado en el formulario para edición
  seleccionarRescatado(index: number) {
    const rescatado = this.rescatados[index];
    this.nombre = rescatado.nombre;
    this.apellido = rescatado.apellido;
    this.edad = rescatado.edad;
    this.sexo = rescatado.sexo;
    this.procedencia = rescatado.procedencia;
    this.valoracion_medica = rescatado.valoracion_medica;
    this.medico_id = rescatado.medico_id;
    this.rescate_id = rescatado.rescate_id;
    this.rescatadoSeleccionado = index;
  }

  // Método para eliminar un rescatado
  eliminarRescatado(index: number) {
    this.rescatados.splice(index, 1);
    this.limpiarFormulario();
  }

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.nombre = '';
    this.apellido = '';
    this.edad = '';
    this.sexo = '';
    this.procedencia = '';
    this.valoracion_medica = '';
    this.medico_id = '';
    this.rescate_id = '';
    this.rescatadoSeleccionado = -1;
  }
}