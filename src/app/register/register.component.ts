import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Provincias = ['hola','buenas','tardes']

  constructor(private router: Router) {
    this.email = '';
    this.username = '';
    this.password='';
    this.localidad = '';
    this.direccion = '';

  }
  localidad:String;
  direccion :String
  email :String;
  username: string;
password: string;

  ngOnInit(): void {
    
  }
  register() : void {
    
 alert("se ha registrado");

 this.router.navigate([" "]);
  
  }

}
