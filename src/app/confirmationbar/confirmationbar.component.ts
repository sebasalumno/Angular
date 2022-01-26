import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmationbar',
  templateUrl: './confirmationbar.component.html',
  styleUrls: ['./confirmationbar.component.css']
})
export class ConfirmationbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Volver() {
    this.router.navigate(["login"]);
  }

}
