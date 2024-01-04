import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { SerivicioPruebaService } from 'src/app/serivicio-prueba.service';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent {

  constructor(private servicio:SerivicioPruebaService){}

@Input() ToDoList:any[]=[];
@Output() numeroTotal = new EventEmitter<number>()
@Input() tar:any;

CategoriasList:any[]=[1,2,3];

  ModalTarea:boolean = false;
  nombre:string = "";
  completa: boolean = true;
  seleccionado: boolean = false;
  idTarea:number = 0;;



  ngOnInit():void{
      this.nombre=this.tar.nombre;
      this.idTarea=this.tar.idTarea;
      this.completa=this.tar.completa;
      this.seleccionado = this.tar.seleccionado;
  }

  addTarea(){
    if (this.nombre.trim() !== '') {
      const nuevaTarea = {
        nombre: this.nombre,
        completa: this.completa,
        idTarea: this.ToDoList.length > 0 ? this.ToDoList[this.ToDoList.length - 1].idTarea + 1 : 1,
        seleccionado: false,
      };
  
      this.nombre = '';
      console.log(nuevaTarea);
      this.ToDoList.push(nuevaTarea);
      this.ToDoList.length;
    }
    }
}
