import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.css']
})
export class HomebarComponent implements OnInit {

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


}
