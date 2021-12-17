import { Offer } from './../models/offer';
import { OfferService } from './../services/offers.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  Ofertas:Array<Offer> = [];

  constructor(private router:Router,private oferta:OfferService) {

   }

  ngOnInit(): void {
    this.loadOfertas();
  }

  loadOfertas(){
    this.oferta.Get(sessionStorage.getItem("id")!.toString()).subscribe((offer) =>{
    console.log(offer)
    offer.forEach((element: Offer) => this.Ofertas.push(element));
    
  })
}
}
