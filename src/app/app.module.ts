import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SobreNosotrosComponent } from './Components/sobre-nosotros/sobre-nosotros.component';
import { RescatadosPubliComponent } from './Components/rescatados-publi/rescatados-publi.component';
import { DonateComponent } from './Components/donate/donate.component';
import { AdminComponent } from './Components/admin/admin.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormRescatadosComponent } from './Components/admin/form-rescatados/form-rescatados.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SobreNosotrosComponent,
    RescatadosPubliComponent,
    DonateComponent,
    AdminComponent,
    NavbarComponent,
    FormRescatadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
