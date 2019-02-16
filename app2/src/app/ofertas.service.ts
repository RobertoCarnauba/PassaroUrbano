import { URL_API } from './app.api/app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

import { Observable } from 'rxjs';



@Injectable()
export class OfertaService {


    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Oferta[]> {
        //efetuar um requisição HTTP
        
        return this.http.get<Oferta[]>('http://localhost:3000/ofertas')
            .toPromise()
            .then((resposta:any) => resposta)
        //Retornar uma promisse com Array Oferta.
    } 

    public getOfertaPorCategoria( categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta:any) => resposta)

    }
    //Retono da oferta
    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta:any) => {
            return resposta[0]
        })
    }

    public getOfertaComoUsarPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta:any) => {
            return resposta[0].descricao
        })
    }

    public getOfetaOndeFicaPorId(id: number): Promise<string> {
          return this.http.get(`${URL_API}/onde-fica?id=${id}`)
          .toPromise()
          .then((resposta:any) => {
              return resposta[0].descricao
          })
    }
    
}
