import { Empresa } from './../models/user';
import { Usuario } from './../models/usuario';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username!: string;
password!: string;
user!:Usuario;
  constructor(private router: Router,private auth:AuthenticationService) { 

    
  }





  ngOnInit() {
  }

    Confirma():void{
      this.router.navigate(["confirmacion"]);
    }

  login() : void {
  this.user={
  email:this.username,
  password:this.password,
  }

  
    this.auth.login(this.user).subscribe((resp)=>{
      var empresa = resp.body as Empresa;
    
      sessionStorage.setItem("id",empresa.id.toString())
      console.log(empresa.id.toString())
      sessionStorage.setItem("token" , resp.headers.get("authorization")!),


      this.router.navigate(['home'])
      
    });
  }

  }

