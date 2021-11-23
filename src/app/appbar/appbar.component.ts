import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  register() : void {
  this.router.navigate(["register"]);
  }
}
