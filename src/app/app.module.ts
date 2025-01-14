import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Conponents/home/home.component';
import { LoginComponent } from './Conponents/login/login.component';
import { SobreNosotrosComponent } from './Conponents/sobre-nosotros/sobre-nosotros.component';
import { RescatadosPubliComponent } from './Conponents/rescatados-publi/rescatados-publi.component';
import { DonateComponent } from './Conponents/donate/donate.component';
import { AdminComponent } from './Conponents/admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SobreNosotrosComponent,
    RescatadosPubliComponent,
    DonateComponent,
    AdminComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
