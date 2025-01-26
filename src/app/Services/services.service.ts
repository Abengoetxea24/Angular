import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

// Interfaz para estructurar los datos de los rescatados
export interface Rescatado {
  id: number;
  nombre: string;
  apellido: string;
  edad: string;
  sexo: string;
  procedencia: string;
  valoracion_medica: string;
  medicos_id: string;
  rescates_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private rescatadosSource = new BehaviorSubject<Rescatado[]>([]);
  rescatados$ = this.rescatadosSource.asObservable();
  private apiUrl = 'http://localhost/rescatadosApi'; // API URL

  constructor(private http: HttpClient) {
    // Al iniciar el servicio, cargamos los rescatados desde localStorage
    this.cargarRescatados();
  }

  // Método para cargar rescatados desde la API o desde localStorage
  cargarRescatados() {
    const rescatadosLocal = localStorage.getItem('rescatados');
    if (rescatadosLocal) {
      // Si existen en localStorage, cargarlos
      this.rescatadosSource.next(JSON.parse(rescatadosLocal));
    } else {
      // Si no existen, realizar la solicitud HTTP
      this.http.get<Rescatado[]>(this.apiUrl).subscribe((rescatados) => {
        this.rescatadosSource.next(rescatados);
        localStorage.setItem('rescatados', JSON.stringify(rescatados)); // Guardar en localStorage
      });
    }
  }

  // Obtener el valor actual de la lista de rescatados
  obtenerRescatados(): Rescatado[] {
    return this.rescatadosSource.getValue();
  }

  // Agregar un nuevo rescatado y guardar en localStorage
  agregarRescatado(rescatado: Rescatado) {
    const rescatados = this.obtenerRescatados();
    rescatados.push(rescatado);
    this.rescatadosSource.next(rescatados);  // Emitir el cambio
    localStorage.setItem('rescatados', JSON.stringify(rescatados));  // Guardar en localStorage
  }

  // Actualizar un rescatado existente y guardar en localStorage
  actualizarRescatado(index: number, rescatado: Rescatado) {
    const rescatados = this.obtenerRescatados();
    rescatados[index] = rescatado;
    this.rescatadosSource.next([...rescatados]);  // Emitir el cambio de forma inmutable
    localStorage.setItem('rescatados', JSON.stringify(rescatados));  // Guardar en localStorage
  }

  // Eliminar un rescatado por índice y guardar en localStorage
  eliminarRescatado(index: number) {
    const rescatados = this.obtenerRescatados();
    rescatados.splice(index, 1);
    this.rescatadosSource.next([...rescatados]);  // Emitir el cambio de forma inmutable
    localStorage.setItem('rescatados', JSON.stringify(rescatados));  // Guardar en localStorage
  }
}
