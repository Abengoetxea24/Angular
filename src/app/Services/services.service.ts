import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Definimos la interfaz para estructurar los datos de los rescatados
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

@Injectable({
  providedIn: 'root', // Hace que este servicio esté disponible en toda la aplicación sin necesidad de importarlo en módulos adicionales.
})
export class ServicesService {
  // Creamos un BehaviorSubject para almacenar y observar la lista de rescatados
  private rescatadosSource = new BehaviorSubject<Rescatado[]>([]);
  // Exponemos el BehaviorSubject como un Observable para que los componentes puedan suscribirse
  rescatados$ = this.rescatadosSource.asObservable();

  constructor() {
    // Inicializamos el BehaviorSubject con algunos datos de ejemplo
    this.rescatadosSource.next([
      { nombre: "Juan", apellido: "Perez", edad: "30", sexo: "M", procedencia: "Madrid", valoracion_medica: "Buena", medico_id: "1", rescate_id: "101" },
      { nombre: "Maria", apellido: "Gomez", edad: "25", sexo: "F", procedencia: "Barcelona", valoracion_medica: "Regular", medico_id: "2", rescate_id: "102" }
    ]);
  }

  // Devuelve la lista actual de rescatados
  getRescatados() {
    return this.rescatadosSource.getValue();
  }

  // Agrega un nuevo rescatado a la lista y emite la nueva lista a los suscriptores
  agregarRescatado(rescatado: Rescatado) {
    const rescatados = this.getRescatados();
    this.rescatadosSource.next([...rescatados, rescatado]);
  }

  // Actualiza un rescatado existente según su índice
  actualizarRescatado(index: number, rescatado: Rescatado) {
    const rescatados = this.getRescatados();
    rescatados[index] = rescatado; // Sobreescribimos el elemento en la posición indicada
    this.rescatadosSource.next([...rescatados]); // Emitimos la lista actualizada
  }

  // Elimina un rescatado según su índice y emite la lista actualizada
  eliminarRescatado(index: number) {
    const rescatados = this.getRescatados();
    rescatados.splice(index, 1); // Eliminamos el elemento de la lista
    this.rescatadosSource.next([...rescatados]); // Emitimos la nueva lista
  }
  
}