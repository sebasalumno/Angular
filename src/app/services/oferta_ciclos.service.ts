import { Oferta_Ciclo } from './../models/oferta_ciclo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Oferta_CicloService {


  constructor(private http:HttpClient) { }
  GetCiclos(id:string): Observable<Array<Oferta_Ciclo>>{
    return this.http.get<Array<Oferta_Ciclo>>("http://localhost:5000/api/OfertaCiclo/GetCiclo?id=" + id);
  }
}