import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offer } from "../models/offer";
4
.30
@Injectable({
  providedIn: 'root'
})

export class OfferService {


    constructor(private http:HttpClient) { }
    Get(id:string): Observable<Array<Offer>>{
      return this.http.get<Array<Offer>>("http://localhost:5000/api/offer/Get?id="+id);
    }
  }