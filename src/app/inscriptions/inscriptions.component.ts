import { Usuario } from './../models/usuario';
import { Contact } from './../models/contact';
import { ContactService } from './../services/contact.service';
import { Offer } from './../models/offer';
import { Inscription } from './../models/inscription';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionsDialogComponent } from '../inscriptions-dialog/inscriptions-dialog.component';
import { MessageService } from '../services/mensajeapp.service';
import { Message } from '../models/message';
import { InscriptionDialogFreeComponent } from '../inscription-dialog-free/inscription-dialog-free.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {


  Inscripciones:Array<Inscription> = [];
  contact!:Contact;
  message!:Message;

  constructor(private router:Router,private inscripciones:InscriptionService,private contacto:ContactService,private mensaje:MessageService,public dialog :MatDialog) { }

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
  Contact(id:number){
    console.log("hola")
    if(sessionStorage.getItem("rolId")?.toString()=="2"){
      console.log("dentro")
      let contactoD = this.dialog.open(InscriptionsDialogComponent)
      
      contactoD.afterClosed().subscribe(result => {
        if(result.toString() != ""){
        console.log(result)
        this.message={
          UsuarioId:id,
          EmpresaId:Number(sessionStorage.getItem("id")),
          Message:result
        }
        this.mensaje.Message(this.message).subscribe((resp) =>{
          console.log(resp)
          window.location.reload();
        })

        }

        window.location.reload();
        })
      
    }else{
      let free = this.dialog.open(InscriptionDialogFreeComponent)
      

    }
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
