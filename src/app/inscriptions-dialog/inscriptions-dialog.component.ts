import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscriptions-dialog',
  templateUrl: './inscriptions-dialog.component.html',
  styleUrls: ['./inscriptions-dialog.component.css']
})
export class InscriptionsDialogComponent implements OnInit {

  mensaje:String = "";
  constructor() { }

  ngOnInit(): void {
  }

  Cancelar() : void{
  
  }

}
