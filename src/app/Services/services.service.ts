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
  providedIn: 'root',
})
export class ServicesService {
  private rescatadosSource = new BehaviorSubject<Rescatado[]>([]);
  rescatados$ = this.rescatadosSource.asObservable();
  private apiUrl = 'http://localhost/rescatadosApi';

  constructor(private http: HttpClient) {}

  // Método para cargar rescatados desde la API y emitirlos al BehaviorSubject
  cargarRescatados() {
    this.http.get<Rescatado[]>(this.apiUrl).subscribe((rescatados) => {
      this.rescatadosSource.next(rescatados);
      console.log(this.rescatadosSource);
    });
  }

  // Obtener el valor actual de la lista de rescatados
  obtenerRescatados(): Rescatado[] {
    return this.rescatadosSource.getValue();
  }

  // Agregar un nuevo rescatado
  agregarRescatado(rescatado: Rescatado) {
    const rescatados = this.obtenerRescatados();
    this.rescatadosSource.next([...rescatados, rescatado]);
  }

  // Actualizar un rescatado existente
  actualizarRescatado(index: number, rescatado: Rescatado) {
    const rescatados = this.obtenerRescatados();
    rescatados[index] = rescatado;
    this.rescatadosSource.next([...rescatados]);
  }

  // Eliminar un rescatado por índice
  eliminarRescatado(index: number) {
    const rescatados = this.obtenerRescatados();
    rescatados.splice(index, 1);
    this.rescatadosSource.next([...rescatados]);
  }
}
