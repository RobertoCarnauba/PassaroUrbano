import { Oferta } from './../shared/oferta.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from './../ofertas.service';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertaService ]
})
export class OfertaComponent implements OnInit, OnDestroy {


  public oferta: Oferta


  constructor( private route: ActivatedRoute,
               private ofertaService: OfertaService
               ) { }

  ngOnInit() {
    // Retorno da oferta por ID
    this.route.params.subscribe((paramentro: Params)=>{
      this.ofertaService.getOfertaPorId( paramentro.id )
      .then((oferta: Oferta) =>{
        this.oferta = oferta
      })
        
    })
    

    
  }
   ngOnDestroy() {
   }

}
