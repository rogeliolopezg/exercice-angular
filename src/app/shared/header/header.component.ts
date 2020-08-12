import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //esta es una propiedad que se crea en todo el headerComponent
  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
