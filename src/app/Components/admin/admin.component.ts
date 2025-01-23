import { Component } from '@angular/core';
import { Rescatado, ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  rescatados: Rescatado[] = [];

  constructor(private servicesRescatados: ServicesService){}

  ngOnInit(): void {
    this.cargarRescatados();
  }

  cargarRescatados(): void{
    this.servicesRescatados.getRescatados().subscribe((data)=>{

      this.rescatados=data;
    });
  }
}
