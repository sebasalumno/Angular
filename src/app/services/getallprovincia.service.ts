import { Provincia } from './../models/provincia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {


  constructor(private http:HttpClient) { }
  GetAll(): Observable<Array<Provincia>>{
    return this.http.get<Array<Provincia>>("http://localhost:5000/api/Provincia/ObtainAll");
  }
}
