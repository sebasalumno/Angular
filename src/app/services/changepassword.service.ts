import { Change } from './../models/change';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ChangepasswordService {

    constructor(private http:HttpClient) { }

    change(change:Change){
        return this.http.post("http://localhost:5000/api/Confirmacion/CambiarContrasenaEmpresa",change)

    }
    
}