import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from './../../ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertaService ]
})
export class OndeFicaComponent implements OnInit {

  public OndeFica: string = ''

  constructor(private route: ActivatedRoute, private oferta: OfertaService) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametro: Params) => {
      this.oferta.getOfetaOndeFicaPorId(parametro.id)
      .then((resposta: string) => {
        this.OndeFica = resposta
      })
    })
    
  }

}
