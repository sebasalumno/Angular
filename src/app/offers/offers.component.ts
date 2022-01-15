import { Oferta_CicloService } from './../services/oferta_ciclos.service';
import { OfferC } from './../models/offerC';
import { OffersDialogComponent } from './../offers-dialog/offers-dialog.component';
import { Offer } from './../models/offer';
import { OfferService } from './../services/offers.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {ThemePalette} from '@angular/material/core';
import { Oferta_Ciclo } from '../models/oferta_ciclo';

import { Ciclo } from '../models/ciclo';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  CiclosOFerta:Array<Array<Ciclo>> = [];
  Ciclos:Array<Ciclo> = [];
  todayDate: Date = new Date();
  Ofertas:Array<Offer> = [];
  

  constructor(private router:Router,private oferta:OfferService,public dialog :MatDialog,private ofertaC:Oferta_CicloService) {


   }

  ngOnInit(): void {
    this.loadOfertas();
  }

  loadOfertas(){
    this.oferta.Get(sessionStorage.getItem("id")!.toString()).subscribe((offer) =>{
    console.log(offer)
    
    offer.forEach((element: Offer) => 
     
    this.Ofertas.push(element),
    
    );
    console.log(this.Ofertas);
    offer.forEach((element: Offer) =>

    this.ofertaC.GetCiclos(element.id.toString()).subscribe((ciclos) =>{
      this.Ciclos = [];
     ciclos.forEach((elemt:Oferta_Ciclo) =>
     this.Ciclos.push(elemt.ciclo),

     
     );
      this.CiclosOFerta.push(this.Ciclos)

    }));
    console.log(this.CiclosOFerta);
    
    });
}

openDialog(){
  let ofertaC = this.dialog.open(OffersDialogComponent)
  ofertaC.afterClosed().subscribe(result => {
    console.log(result)
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
