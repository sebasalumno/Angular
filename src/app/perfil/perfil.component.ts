import { EmpresaService } from './../services/empresa.service';
import { Empresa } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
a:string = "1";
 empresa!:Empresa;
 

  
  constructor(private router: Router,private empre:EmpresaService) { 

  }

  ngOnInit(): void {
    this.EmpresaGet();
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
