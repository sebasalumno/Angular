import { Inicio } from './../models/inicio';
import { EmpresaService } from './../services/empresa.service';
import { Empresa } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SendpasswordcodeService } from '../services/sendpasswordcode.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
a:string = "1";
 empresa!:Empresa;
 inicio!:Inicio;
 

  
  constructor(private router: Router,private empre:EmpresaService,public dialog: MatDialog,private passcode:SendpasswordcodeService) { 

  }

  ngOnInit(): void {
    this.EmpresaGet();
  }
  Iniciar():void{
    console.log("aqui")
    this.inicio={
      id:Number(sessionStorage.getItem("id"))
    }
    console.log(this.inicio)
    this.passcode.sendcode(this.inicio).subscribe((resp) =>{
      console.log(resp)
      if(resp == true){
      this.router.navigate(["changepassword"]);
      }else{

      }
    });

  }

  EmpresaGet():void{

          this.empre.Get(sessionStorage.getItem("id")!.toString()).subscribe((info)=>{

            this.empresa={
              id:1,
                name:info.name,
                email:info.email,
                localidad:info.localidad,
                direccion:info.direccion,
                provinciaId:info.provinciaId,
                PV:info.provincia?.nombre

            
              }
    })
   
  }

}

