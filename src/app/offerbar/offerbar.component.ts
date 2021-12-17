import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offerbar',
  templateUrl: './offerbar.component.html',
  styleUrls: ['./offerbar.component.css']
})
export class OfferbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() : void {
    alert("saliendo de su cuenta");
    this.router.navigate([" "]);
  
    
  }
  perfil() : void {

    this.router.navigate(["perfil"]);
  
  }
  home() : void {

    this.router.navigate(["home"]);
  
  }

}
