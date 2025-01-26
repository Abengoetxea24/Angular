import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './Components/admin/admin.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SobreNosotrosComponent } from './Components/sobre-nosotros/sobre-nosotros.component';
import { FormRescatadosComponent } from './Components/admin/form-rescatados/form-rescatados.component';
import { FormDonacionComponent } from './Components/form-donacion/form-donacion.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'SobreNosotros', component: SobreNosotrosComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Admin', component: AdminComponent}, 
  {path: 'Navbar', component: NavbarComponent},
  {path: 'Form-rescatados', component: FormRescatadosComponent},
  { path: 'Form-rescatados/:id', component: FormRescatadosComponent },
  {path: 'Form-donacion', component: FormDonacionComponent},


  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
