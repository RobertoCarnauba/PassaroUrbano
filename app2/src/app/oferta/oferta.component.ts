import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from './../ofertas.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertaService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta


  constructor( private route: ActivatedRoute,
               private ofertaService: OfertaService
               ) { }

  ngOnInit() {
    // Retorno da oferta por ID
    this.ofertaService.getOfertaPorId( this.route.snapshot.params['id'] )
    .then((oferta: Oferta) =>{
      this.oferta = oferta
    })
    
  }

}
