import { ChangeDetectorRef, Component } from '@angular/core';
import { SerivicioPruebaService } from '../serivicio-prueba.service';

@Component({
  selector: 'app-turnos-component',
  templateUrl: './turnos-component.component.html',
  styleUrls: ['./turnos-component.component.css']
})
export class TurnosComponentComponent {

  constructor(private servicio:SerivicioPruebaService, private changeDetector: ChangeDetectorRef){}

  TurnosList:any[] = [];



  ngOnInit():void {
    this.getTurnos();

  }

  getTurnos(){
    this.servicio.getPacList().subscribe(data => {
      this.TurnosList = data;
      console.log(data);

        // Forzar la detección de cambios
    this.changeDetector.detectChanges();
  });
}

idTurno:number = 0;
idPaciente:number = 0;
idProfesional:number = 0;
dia:string = "";
horario:string ="";
}
