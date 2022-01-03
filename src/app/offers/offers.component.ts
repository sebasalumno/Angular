import { OfferC } from './../models/offerC';
import { OffersDialogComponent } from './../offers-dialog/offers-dialog.component';
import { Offer } from './../models/offer';
import { OfferService } from './../services/offers.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  todayDate: Date = new Date();
  Ofertas:Array<Offer> = [];

  constructor(private router:Router,private oferta:OfferService,public dialog :MatDialog) {


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
openDialog(){
  let ofertaC = this.dialog.open(OffersDialogComponent)
  ofertaC.afterClosed().subscribe(result => {
    
    this.oferta.Create(result).subscribe((resp) =>{
          console.log(resp)
          window.location.reload();
    })

  })
}
Delete(Id:number){
  console.log(Id);
this.oferta.Delete(Id).subscribe(result => {
  console.log(result);
  window.location.reload();
})
}
}
