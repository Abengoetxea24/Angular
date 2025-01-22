import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
