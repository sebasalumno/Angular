import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empresa } from "../models/user";
@Injectable({
  providedIn: 'root'
})

export class EmpresaService {


    constructor(private http:HttpClient) { }
    Get(id:string): Observable<Empresa>{
      return this.http.get<Empresa>("http://localhost:5000/api/Empresa/Get?id="+id);
    }
  }