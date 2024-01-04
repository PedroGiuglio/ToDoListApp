import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerivicioPruebaService } from './serivicio-prueba.service';
import { HttpClientModule } from '@angular/common/http';
import { ToDoComponentComponent } from './to-do-component/to-do-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTareaComponent } from './to-do-component/add-tarea/add-tarea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToDoHomeComponent } from './to-do-home/to-do-home.component';
import { AddTareaHomeComponent } from './to-do-home/add-tarea-home/add-tarea-home.component';
import { LOCALE_ID } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VacationsComponentComponent } from './vacations-component/vacations-component.component';
import { ListFilterComponentComponent } from './list-filter-component/list-filter-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponentComponent,
    AddTareaComponent,
    ToDoHomeComponent,
    AddTareaHomeComponent,
    LoginComponent,
    SignupComponent,
    VacationsComponentComponent,
    ListFilterComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [SerivicioPruebaService,  { provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
