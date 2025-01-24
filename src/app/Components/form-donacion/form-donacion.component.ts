// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form-donacion',
//   templateUrl: './form-donacion.component.html',
//   styleUrls: ['./form-donacion.component.scss']
// })
// export class FormDonacionComponent {
//   patternDni = '^[0-9]{8}[A-Z]$';
//   dni: string = "";
//   nombre: string = "";
//   pago: string = "";

//   onSubmit(form: any) {
//     console.log(form.value);
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-donacion',
  templateUrl: './form-donacion.component.html',
  styleUrls: ['./form-donacion.component.scss']
})
export class FormDonacionComponent {
  dni: string = '';
  pago: string = '';
  nombre: string = '';
  patternDni: string = '^[0-9]{8}[A-Za-z]$';

  showDialog: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Implementación del método ngOnInit
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.showDialog = true;
    }
  }

  closeDialog(): void {
    this.showDialog = false;
    this.router.navigate(['/Home']); /*Routing para redirigir a la home al pulsar el botón de cerrar en el popup*/
  }
}