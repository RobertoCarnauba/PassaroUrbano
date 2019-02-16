import { OfertaService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
    this.oferta.getOfetaOndeFicaPorId(this.route.parent.snapshot.params['id'])
    .then((resposta: string) => {
      this.OndeFica = resposta
    })
  }

}
