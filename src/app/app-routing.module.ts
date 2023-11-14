import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnosComponentComponent } from './turnos-component/turnos-component.component';
import { ToDoComponentComponent } from './to-do-component/to-do-component.component';
import { ToDoHomeComponent } from './to-do-home/to-do-home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VacationsComponentComponent } from './vacations-component/vacations-component.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'work',component:ToDoComponentComponent},
  {path:'prueba',component:ToDoHomeComponent},
  {path:'vacaciones',component:VacationsComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
