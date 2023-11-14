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
  idTarea:number = 2;
  idCategoria:number = 0;
  selectedCategoriaId: number = 0;




  ngOnInit():void{
      this.nombre=this.tar.nombre;
      this.idTarea=this.tar.idTarea;
      this.completa=this.tar.completa;
      this.idCategoria=this.tar.idCategoria;
      this.idTarea++;
  }

  addTarea(){
       // Crear un nuevo objeto ToDoItem con los valores deseados
       var val = {
        nombre: this.nombre,
        completa: this.completa,
        idTarea: this.idTarea,
        idCategoria:this.idCategoria
      }
      // this.servicio.addTarea(val).subscribe(res=>{
      //   console.log("Agregado con exito: " + res)
      // });  
      // Restablecer los valores de idTarea, nombre y completa si es necesario
      this.idTarea++;
      this.nombre = '';
      this.ToDoList.push(val);
      console.log(val);
      this.numeroTotal.emit(this.ToDoList.length);
    }
  

  closeClick(){
    console.log("je");
    this.ModalTarea=false;
  }


}
