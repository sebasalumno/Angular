import { Inicio } from './../models/inicio';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class SendpasswordcodeService {

    constructor(private http:HttpClient) { }

    sendcode(inicio:Inicio){
        return this.http.post("http://localhost:5000/api/Confirmacion/IniciarContrasenaEmpresa",inicio)

    }
    
}