import { Component } from '@angular/core';
import { SerivicioPruebaService } from '../serivicio-prueba.service';
import { SetDatosService } from '../set-datos.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { __addDisposableResource } from 'tslib';

@Component({
  selector: 'app-vacations-component',
  templateUrl: './vacations-component.component.html',
  styleUrls: ['./vacations-component.component.css']
})
export class VacationsComponentComponent {
  constructor(private servicio:SerivicioPruebaService, private dataService: SetDatosService, private login:LoginService, private router: Router){}

  datosGenerados: any[] = [];
  receivedData: any;
  mostrarList:boolean = true;
  showListDestacados:boolean = false;
  mostrarCompletos:boolean = false;
  mostrarIncompletos:boolean = false;

  ngOnInit():void{
    this.getTurnos();
    console.log(this.ToDoList);
    console.log(this.valorRecibido)
 
    // Formatea la fecha en el formato deseado (Friday, 16 September 2023)
    this.fechaActual = new Date();
    this.fechaFormateada = this.formatDate(this.fechaActual);
    console.log('Fecha actual formateada:', this.fechaFormateada);



    this.datosGenerados = this.ToDoList;
    this.dataService.setDatosGenerados(this.datosGenerados);

    //----------//
    this.receivedData = this.login.sharedData;
    console.log(this.receivedData.username);
  }

  formatDate(date: Date): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = date.getDate();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  }



  ToDoList:any[] = [
    { nombre: "Preparar valija", idTarea: 1, completa: true, seleccionado: false },
    { nombre: "Cambiar pasajes", idTarea: 2, completa: false, seleccionado: false },
    { nombre: "Comprar ticket", idTarea: 3, completa: true, seleccionado: false },
    { nombre: "Pesar paquete", idTarea: 4, completa: true, seleccionado: false },
    { nombre: "Pagar seguro", idTarea: 5, completa: false, seleccionado: false },
  ];



  ModalActivado:boolean = false;
  tar:any = "";
  ModalTitle = "Titulo";
  CategoriasList:any[]=[];
  fechaActual: Date = new Date();
  fechaFormateada: string = "";


  nombre:string = "";
  completa:boolean = false;
  idTarea:number = 0;
  seleccionado: boolean = false;; 

  getTurnos(){
    // this.servicio.getTareasWork().subscribe(data =>{
    //   this.ToDoList = data;
    //   console.log(data);
    // })
    this.mostrarList;
    this.ToDoList;
    console.log(this.ToDoList);
    
  }

  cantidadTareas : number = this.ToDoList.length;

  AddClick(){
    this.tar = {
      idTarea: 0,
      nombre: "",
      completa: false,
      seleccionado: false
    };

    this.ModalActivado = true;
    if (this.tar.nombre.trim() !== '') {
      this.tar.idTarea = this.cantidadTareas + 1;
      this.ToDoList.push(this.tar);
      console.log(this.tar);
      console.log("Hola");
    }
  }


  closeClick(){
    console.log("Cerro");
    this.getTurnos();
    this.ToDoList;
    console.log(this.valorRecibido);
  }

  eliminarTarea(idTarea:number){
    // Encuentra el índice del elemento que coincida con el idTarea
  const index = this.ToDoList.findIndex(item => item.idTarea === idTarea);

  // Si se encuentra el elemento, elimínalo usando splice
  if (index !== -1) {
    this.ToDoList.splice(index, 1);
    this.ListDestacados.splice(index,1);
    this.ListCompletas.splice(index,1);
    this.valorRecibido = this.ToDoList.length;
  }
  console.log("Tarea eliminada")
  console.log(this.ToDoList);

  }

   numeroDeElementos = this.ToDoList.length;
   
   valorRecibido:number = this.numeroDeElementos;
   capturarValor(valor:number){
    this.valorRecibido = valor;
    console.log(valor);
   }


   itemsPerPage = 5; // Número de elementos por página
   currentPage = 1;

  

itemsToShow = 5;

previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.itemsToShow -= 5; // Decrease the number of items shown
  }
}

nextPage() {
  const maxPage = Math.ceil(this.ToDoList.length / this.itemsPerPage);

  if (this.currentPage < maxPage) {
    this.currentPage++;
    this.itemsToShow += 5; // Aumenta la cantidad de elementos mostrados
  }
}

   buttonExit(){
    console.log(this.login.sharedData);
    this.login.sharedData = "";
    this.router.navigate(['']);
   }



  agregarClase = false;

  ListDestacados:any []= [];
  
  //Button Star ListDestacados //
  toggleClase(campo: any) {
    if (campo.hasOwnProperty('seleccionado')) {
      campo.seleccionado = !campo.seleccionado;

      if (campo.seleccionado) {
        // Agregar al array si está seleccionado
        this.ListDestacados.push(campo);
        console.log(this.ListDestacados);
      } else {
        // Eliminar del array si está deseleccionado
        const index = this.ListDestacados.indexOf(campo);
        if (index !== -1) {
          this.ListDestacados.splice(index, 1);
          console.log(this.ListDestacados);
        }
      }
    }
  }




  showDestacados(){
    if (this.ListDestacados.length === 0) {
      alert("No hay elementos en la lista de favoritos");
    } else {
      console.log(this.ListDestacados);
  
      // Restablece la página y los elementos a mostrar
      this.currentPage = 1;
      this.itemsToShow = 5;
  
      this.mostrarList = false;
      this.mostrarCompletos = false;
      this.showListDestacados = true;
    }
  }


  ListCompletas:any [] = [];

  showCompletas(){
    this.mostrarList = false;
    this.showListDestacados = false;
    this.mostrarIncompletos = false;
    this.mostrarCompletos = true;
    this.ToDoList.forEach(tarea => {
      if (tarea.completa) {
        this.ListCompletas.push(tarea);
      }
      console.log(this.ListCompletas);
    });

  }

  ListIncompletas:any [] = [];

  showIncompletas(){
    this.mostrarList = false;
    this.showListDestacados = false;
    this.mostrarCompletos = false;
    this.mostrarIncompletos = true;
    this.ToDoList.forEach(tarea => {
      if (!tarea.completa) {
        this.ListIncompletas.push(tarea);
        console.log('Incompleta:', tarea);
      }
    });
  }


  clearFilters(){
    this.mostrarList = true;
    this.showListDestacados = false;
    this.mostrarCompletos = false;
    this.mostrarIncompletos = false;
  }
}
