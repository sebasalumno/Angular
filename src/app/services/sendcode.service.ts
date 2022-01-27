import { Codigo } from './../models/codigo';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class SendcodeService {

    constructor(private http:HttpClient) { }

    sendcode(codigo:Codigo){
        return this.http.post("http://localhost:5000/api/Confirmacion/ConfirmacionEmpresa",codigo)

    }
    
}