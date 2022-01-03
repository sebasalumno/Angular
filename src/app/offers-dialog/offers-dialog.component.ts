
import { DatePipe } from '@angular/common';
import { OfferC } from './../models/offerC';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-dialog',
  templateUrl: './offers-dialog.component.html',
  styleUrls: ['./offers-dialog.component.css']
})
export class OffersDialogComponent implements OnInit {

  Oferta !: OfferC 


  constructor() { 
    
  }

  ngOnInit(): void {
    this.Oferta = {
      EmpresaId : Number(sessionStorage.getItem("id")!),
      nombre : " ",
      descripcion : " ",
      remuneracion : 0,
      horario:" ",
      fechaF : new Date(),
      fechaI : new Date()
    }
  }
Cancelar() : void{
  
}

}
