import { Ciclo } from './../models/ciclo';

import { DatePipe } from '@angular/common';
import { OfferC } from './../models/offerC';
import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../services/getallprovincia.service';
import { Provincia } from '../models/provincia';
import { CicloService } from '../services/ciclo.service';
import { CicloOffer } from '../models/ciclooffer';

@Component({
  selector: 'app-offers-dialog',
  templateUrl: './offers-dialog.component.html',
  styleUrls: ['./offers-dialog.component.css']
})
export class OffersDialogComponent implements OnInit {
  Ciclos:Array<Ciclo> =[];
  ciclosSelected:Array<CicloOffer> = [];
  Oferta !: OfferC; 
  ciclito!:CicloOffer;


  constructor(private cicloSS:CicloService) { 
    
  }

  ngOnInit(): void {
    this.loadCiclos()

    this.Oferta = {
      EmpresaId : Number(sessionStorage.getItem("id")!),
      nombre : " ",
      descripcion : " ",
      remuneracion : 0,
      horario:" ",
      fechaF : new Date(),
      fechaI : new Date(),
      listaCiclos:this.ciclosSelected

    }
  }


Cancelar() : void{
  
}
loadCiclos(){
  this.cicloSS.GetAll().subscribe((prov)=>{
    console.log(prov)
    prov.forEach(ele => this.Ciclos.push(ele));
  })

}

change(Cic:Ciclo){
this.ciclito={
  idCiclo:Cic.id
}
this.ciclosSelected.push(this.ciclito)
console.log(this.Oferta)
console.log("aqui")
}

}
