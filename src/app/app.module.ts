import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SobreNosotrosComponent } from './Components/sobre-nosotros/sobre-nosotros.component';
import { AdminComponent } from './Components/admin/admin.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormRescatadosComponent } from './Components/admin/form-rescatados/form-rescatados.component';
import { FormDonacionComponent } from './Components/form-donacion/form-donacion.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SobreNosotrosComponent,
    
    AdminComponent,
    NavbarComponent,
    FormRescatadosComponent,
    FormDonacionComponent,
    FooterComponent
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
