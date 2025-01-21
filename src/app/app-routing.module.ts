import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './Components/admin/admin.component';
import { DonateComponent } from './Components/donate/donate.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RescatadosPubliComponent } from './Components/rescatados-publi/rescatados-publi.component';
import { SobreNosotrosComponent } from './Components/sobre-nosotros/sobre-nosotros.component';



const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'SobreNosotros', component: SobreNosotrosComponent},
  {path: 'Rescatados', component: RescatadosPubliComponent},
  {path: 'Donar', component: DonateComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Admin', component: AdminComponent}, 
  {path: 'Navbar', component: NavbarComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
