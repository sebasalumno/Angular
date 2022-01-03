import { Offer } from './../models/offer';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OfferC } from './../models/offerC';


@Injectable({
  providedIn: 'root'
})

export class OfferService {


    constructor(private http:HttpClient) { }
    Get(id:string): Observable<Array<Offer>>{
      return this.http.get<Array<Offer>>("http://localhost:5000/api/offer/Get?id="+id);
    }


    Create(oferta:OfferC):Observable<OfferC>{
       return this.http.post<OfferC>("http://localhost:5000/api/offer/Create",oferta);
    }
    Delete(Id:number){
      return this.http.delete("http://localhost:5000/api/offer/Delete?Id="+Id)
    }
  }