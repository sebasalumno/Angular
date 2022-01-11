import { HttpErrorResponse } from '@angular/common/http';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { ProvinciaService } from '../services/getallprovincia.service';
import { Provincia } from '../models/provincia';
import { Register } from '../models/register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  Provincias:Array<Provincia> =[];
  provinciaSelected:number = 0;
  registervar!:Register;
  provincias:string;
  localidad:string;
  direccion :string
  email :string;
  username: string;
  password: string;

  constructor(private router: Router,private provincia:ProvinciaService,private registerss:RegisterService) {
    this.email = '';
    this.username = '';
    this.password='';
    this.localidad = '';
    this.direccion = '';
    this.provincias ='';
    
  }



   



  ngOnInit(): void {
    this.loadProvincia();
  }
  loadProvincia(){
    this.provincia.GetAll().subscribe((prov)=>{
      console.log(prov)
      prov.forEach(ele => this.Provincias.push(ele));
    })

  }
  register() : void {
    console.log(this.email)
    console.log(this.direccion)
    console.log(this.localidad)
    console.log(this.username)
    console.log(this.provinciaSelected)
    console.log(this.password)

    if(this.email.localeCompare('') != 0 &&
       this.username.localeCompare('') != 0 &&
       this.localidad.localeCompare('') != 0 &&
       this.direccion.localeCompare('') != 0 &&
       this.provinciaSelected != 0 ){
         this.registervar={
      email:this.email,
      name:this.username,
      provinciaId:this.provinciaSelected,
      localidad:this.localidad,
      direccion:this.direccion,
      password:this.password
    }


    this.registerss.register(this.registervar).subscribe(()=>{
      

        this.router.navigate(["login"]);
      
       
    });
    }else{    
      alert("Rellene todos los campos")
      console.log(this.email)
      console.log(this.direccion)
      console.log(this.localidad)
      console.log(this.username)
      console.log(this.provinciaSelected)
    }
 




  
  }
  change(Prov:Provincia){
    this.provinciaSelected = Prov.id;

  }

}
