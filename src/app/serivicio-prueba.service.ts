import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerivicioPruebaService {

  readonly APIUrl="https://localhost:5001/api"

  constructor(private http:HttpClient) { }

  getPacList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/turnos')
  }

  //METODO API ToDoList

  getTareasWork():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tareas/Work')
  }
  
  addTarea(val:any){
    return this.http.post(this.APIUrl+'/tareas',val)
  }

  //METODO API HOME

  getTareasHome():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tareas/Home')
  }
}
