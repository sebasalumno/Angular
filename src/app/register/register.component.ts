import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  register() : void {
    
 alert("se ha registrado");

 this.router.navigate([" "]);
  
  }

}
