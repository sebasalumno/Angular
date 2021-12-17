import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { ProvinciaService } from '../services/getallprovincia.service';
import { Provincia } from '../models/provincia';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  Provincias:Array<Provincia> =[];
  provinciaSelected:number = 0;
 

  constructor(private router: Router,private provincia:ProvinciaService) {
    this.email = '';
    this.username = '';
    this.password='';
    this.localidad = '';
    this.direccion = '';
    this.provincias ='';
    
  }

  provincias:String;
  localidad:String;
  direccion :String
  email :String;
  username: String;
  password: String;

   



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

 this.router.navigate([" "]);
  
  }
  change(Prov:Provincia){
    this.provinciaSelected = Prov.id;

  }

}
