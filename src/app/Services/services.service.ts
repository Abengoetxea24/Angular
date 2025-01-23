import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://localhost/rescatadosApi';

  constructor(private http: HttpClient){}
    
  getRescatados(): Observable<Rescatado[]>{
      return this.http.get<Rescatado[]>(this.apiUrl);
    
  }
}
export interface Rescatado{

  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  sexo: string;
  procedencia: string;
  valoracion_medica: string;
  foto: string;
  medicos_id: number;
  rescates_id: number;

}


