import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescription } from '../../interfaces/producto-description.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescription;
  id: string;

  constructor( private route: ActivatedRoute,
               public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      console.log(parametros.id);
      this.productosService.getProducto(parametros.id)
      .subscribe(( producto: ProductoDescription) => {
        this.id = parametros.id;
        this.producto = producto;
        //console.log(producto);

      });
    });
  }

}
