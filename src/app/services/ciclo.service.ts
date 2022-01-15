import { Ciclo } from './../models/ciclo';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CicloService {


  constructor(private http:HttpClient) { }
  GetAll(): Observable<Array<Ciclo>>{
    return this.http.get<Array<Ciclo>>("http://localhost:5000/api/Ciclo/GetAll");
  }
}
