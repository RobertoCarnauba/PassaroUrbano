import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

import { Observable } from 'rxjs';



@Injectable()
export class OfertaService {


    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Oferta[]> {
        //efetuar um requisição HTTP
        
        return this.http.get<Oferta[]>('http://localhost:3000/ofertas?valor = 29.90')
            .toPromise()
            .then((resposta:any) => resposta)
            
            
        //Retornar uma promisse com Array Oferta.
    } 
}
