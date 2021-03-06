import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  cargando = true;
  productos: Producto[] = [];


  constructor( private http: HttpClient) {
    this.cargarProductos();

   }
   private cargarProductos(){
     this.http.get('https://angular-portafolio-5eb4a.firebaseio.com/productos_idx.json')
     .subscribe((res: Producto[]) => {
       // console.log(res);
       this.productos = res;
       this.cargando = false;
     });
   }

  getProducto ( id: string ){
    
    return this.http.get(`https://angular-portafolio-5eb4a.firebaseio.com/productos/${ id }.json`);
    

  }


}
