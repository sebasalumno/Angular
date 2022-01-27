import { Contact } from './../models/contact';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class ContactService{
    constructor(private http:HttpClient) { }

  Contact(contact:Contact){
    return this.http.post("http://localhost:5000/api/Empresa/Send",contact);
 }

}
