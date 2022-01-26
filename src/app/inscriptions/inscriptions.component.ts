import { Offer } from './../models/offer';
import { Inscription } from './../models/inscription';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {


  Inscripciones:Array<Inscription> = [];

  constructor(private router:Router,private inscripciones:InscriptionService) { }

  ngOnInit(): void {
    this.loadInscripciones();
  }

  loadInscripciones(){
    this.inscripciones.Get(sessionStorage.getItem("id")!.toString()).subscribe((ins) =>{
      console.log(ins)
      ins.forEach((element:Inscription) =>
      this.Inscripciones.push(element));

      console.log(this.Inscripciones);

    })
  }

}
