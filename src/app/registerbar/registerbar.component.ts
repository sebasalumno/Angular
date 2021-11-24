import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registerbar',
  templateUrl: './registerbar.component.html',
  styleUrls: ['./registerbar.component.css']
})
export class RegisterbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() : void {
    
      this.router.navigate([""]);
    
    }

}
