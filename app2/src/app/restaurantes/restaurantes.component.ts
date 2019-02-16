import { Component, OnInit } from '@angular/core';

import { OfertaService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';



@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertaService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[]

  constructor( private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertaPorCategoria('restaurante')
      .then(( ofertas:Oferta[]) =>{
        this.ofertas = ofertas
      })
    }


}
