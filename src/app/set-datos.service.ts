import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SetDatosService {

  constructor() { }
  
  private datosGenerados: any[] = [];

  setDatosGenerados(data: any[]) {
    this.datosGenerados = data;
  }

  getDatosGenerados() {
    return this.datosGenerados;
  }
}
