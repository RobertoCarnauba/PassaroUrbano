import { Component, OnInit } from '@angular/core';
import { OfertaService } from './../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { retry, switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { of } from 'rxjs';




@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertaService ]
})
export class TopoComponent implements OnInit {

  private ofertas: Observable<Oferta[]>
  // public oferta2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor( private ofertaService: OfertaService ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log('Requisicção para API HTTP')
        if( termo.trim() === ''){
          return of<Oferta[]>([]);
        }
        return this.ofertaService.pesquisaOfertas(termo)
      })
    )

    // this.ofertas.subscribe((ofertas: Oferta[]) => {
    //   console.log(ofertas)
    //   this.oferta2 = ofertas
      
    // }
    // )
  }

  public pesquisa(termosbusca: string): void {
    console.log('keyup caracter: ', termosbusca)
    this.subjectPesquisa.next(termosbusca)
  }

  public limpaConsulta(): void{
    this.subjectPesquisa.next('')
  }

}
