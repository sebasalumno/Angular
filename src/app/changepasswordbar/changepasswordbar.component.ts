import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepasswordbar',
  templateUrl: './changepasswordbar.component.html',
  styleUrls: ['./changepasswordbar.component.css']
})
export class ChangepasswordbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Volver() {
    this.router.navigate(["perfil"]);
  }

}
