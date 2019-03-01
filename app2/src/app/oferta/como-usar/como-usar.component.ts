import { OfertaService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertaService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '' 
 
  constructor(private route: ActivatedRoute, private ofertaService: OfertaService ) { }

  ngOnInit() {
    
    this.route.parent.params.subscribe((paramentro: Params) => {
      this.ofertaService.getOfertaComoUsarPorId(paramentro.id)
      .then((resposta: string) => {
        this.comoUsar = resposta
      })
    })
    
  }

}
