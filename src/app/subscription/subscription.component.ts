import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Comprar(){
    this.router.navigate(["stripe"]);
    }
    Free(){
      this.router.navigate(["login"]);
      }

  

}
