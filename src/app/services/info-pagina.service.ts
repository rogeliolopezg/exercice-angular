import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
    console.log('Servicio de infoPagina esta cargado');
    this.cargarInfo();
    this.cargarEquipo();
   }
   private cargarInfo(){
    // leer el archicvo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (res: InfoPagina) => {
      this.cargada = true;
      this.info = res;
      // console.log(res);
    });
  }
  private cargarEquipo(){
    // aca estamos recibiendo la informacion que tenemos en la base de datos en FireBase (solo se tomo la direccion y se le agrego .JSON)
    this.http.get('https://angular-portafolio-5eb4a.firebaseio.com/equipo.json')
    .subscribe((res: any[]) => {
      this.equipo = res;
      // console.log(res);

    });

  }
}


