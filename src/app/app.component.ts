import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reto-3';
  visible = true;
  visible2 = true;

  ocultar(){
    this.visible = false;
  }
  ocultar2(){
    this.visible2 = false;
  }




}
