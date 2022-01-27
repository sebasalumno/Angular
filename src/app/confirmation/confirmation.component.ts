import { Codigo } from './../models/codigo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendcodeService } from '../services/sendcode.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  email!:string;
  codigo!:number;
  codigovar!:Codigo

  constructor(private router: Router,private code : SendcodeService) { }

  ngOnInit(): void {
  }

  enviar():void{
    this.codigovar={
      email:this.email,
      codigo:Number(this.codigo.toString())
    }
    console.log(this.codigovar)
    this.code.sendcode(this.codigovar).subscribe((resp)=>{
      if(resp == true){
        this.router.navigate(["login"]);
      }
      else{
        alert("El codigo o el email no son correctos")
      }
    });

    
  }

}
