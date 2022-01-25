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

  login() : void {
  this.user={
  email:this.username,
  password:this.password,
  }

  
    this.auth.login(this.user).subscribe((resp)=>{
    
      sessionStorage.setItem("id",resp.body!.toString())
      sessionStorage.setItem("token" , resp.headers.get("authorization")!),


      this.router.navigate(['home'])
      
    });


  }
  }

