import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  patternDni = '^[0-9]{8}[A-Z]$';
  dni: string = "";

  onSubmit(form: any) {
    console.log(form.value);
  }
}
