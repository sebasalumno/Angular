import { ContactService } from './../services/contact.service';
import { Offer } from './../models/offer';
import { Inscription } from './../models/inscription';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {


  Inscripciones:Array<Inscription> = [];
  contact!:Contact;

  constructor(private router:Router,private inscripciones:InscriptionService,private contacto:ContactService) { }

  ngOnInit(): void {
    this.loadInscripciones();
  }
  Send(id:number):void{
    this.contact={
      id:Number(id.toString()),
      idempresa:Number(sessionStorage.getItem("id"))
    }
    this.contacto.Contact(this.contact).subscribe((resp)=>{
      if(resp ==true){
        alert("Se le ha enviado un correo al usuario");
      }else{
        alert("el usuario ¿¡No existe!?")
      }

    });

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
