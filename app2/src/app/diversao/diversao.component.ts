import { Component, OnInit } from '@angular/core';

import { OfertaService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[OfertaService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  constructor( private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertaPorCategoria('diversao')
      .then(( ofertas:Oferta[]) =>{
        this.ofertas = ofertas
      })
    }

}
