
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Message } from '../models/message';


@Injectable({
    providedIn: 'root'
  })
export class MessageService{
    constructor(private http:HttpClient) { }

  Message(message:Message){
    return this.http.post("http://localhost:5000/api/Empresa/Contact",message);
 }

}