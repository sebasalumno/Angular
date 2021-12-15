import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  login(user:Usuario){
    return this.http.post<any>("http://localhost:5000/api/Usuario/Login",user)

  }
}
