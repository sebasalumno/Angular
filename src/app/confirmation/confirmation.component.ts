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

  constructor(private router: Router,private code : SendcodeService) { }

  ngOnInit(): void {
  }

  enviar():void{
    this.code.sendcode(this.email,this.codigo).subscribe((resp)=>{
      if(resp == true){
        this.router.navigate(["login"]);
      }
      else{
        alert("El codigo o el email no son correctos")
      }
    });

    
  }

}
