import { Component } from '@angular/core';

@Component({
  selector: 'app-form-donacion',
  templateUrl: './form-donacion.component.html',
  styleUrls: ['./form-donacion.component.scss']
})
export class FormDonacionComponent {
  patternDni = '^[0-9]{8}[A-Z]$';
  dni: string = "";
  nombre: string = "";
  pago: string = "";

  onSubmit(form: any) {
    console.log(form.value);
  }
}
