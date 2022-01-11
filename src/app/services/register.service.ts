import { Usuario } from './../models/usuario';
import { Register } from './../models/register';
import { Observable } from 'rxjs';


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(register:Register):Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:5000/api/Empresa/Create",register);

  }
}
