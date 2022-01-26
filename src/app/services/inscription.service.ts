import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscription } from '../models/inscription';


@Injectable({
    providedIn: 'root'
  })


export class InscriptionService{
    constructor(private http:HttpClient) { }

    Get(id:string):Observable<Array<Inscription>>{
        return this.http.get<Array<Inscription>>("http://localhost:5000/api/Inscripciones/GetEmpresa?id="+id)
    }


}