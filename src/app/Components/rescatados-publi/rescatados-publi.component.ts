import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rescatados-publi',
  templateUrl: './rescatados-publi.component.html',
  styleUrls: ['./rescatados-publi.component.scss']
})
export class RescatadosPubliComponent {
  patternDni = '^[0-9]{8}[A-Z]$';
  dni: string = "";

  onSubmit(form: any) {
    console.log(form.value);
  }
}
