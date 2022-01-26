import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscriptionsbar',
  templateUrl: './inscriptionsbar.component.html',
  styleUrls: ['./inscriptionsbar.component.css']
})
export class InscriptionsbarComponent implements OnInit {

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
  ofertas() : void {

    this.router.navigate(["ofertas"]);
  
  }

  pagina() : void {

    this.router.navigate(["home"]);
  
  }

}
