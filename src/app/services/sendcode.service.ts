import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class SendcodeService {

    constructor(private http:HttpClient) { }

    sendcode(email:string,codigo:number){
        return this.http.put("http://localhost:5000/api/Confirmacion/ConfirmacionEmpresa?email=" + email +"&codigo="+ codigo,email)

    }
    
}