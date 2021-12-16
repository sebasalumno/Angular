import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilbar',
  templateUrl: './perfilbar.component.html',
  styleUrls: ['./perfilbar.component.css']
})
export class PerfilbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() : void {
    alert("saliendo de su cuenta");
    this.router.navigate([" "]);
  
  }
  home():void{
    this.router.navigate(["home"])
      }
}
