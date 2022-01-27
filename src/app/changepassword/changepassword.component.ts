
import { Change } from './../models/change';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangepasswordService } from '../services/changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  password!:string;
  passwordR!:string;
  codigo!:number;
  changevar!:Change;

  constructor(private router: Router,private change:ChangepasswordService) { }

  ngOnInit(): void {
  }

  cambiar():void{
    if(this.password === this.passwordR){
      this.changevar={
        password:this.password,
        codigo:Number(this.codigo.toString())
      }

      this.change.change(this.changevar).subscribe((resp)=>{
        if(resp == true){
          this.router.navigate(["login"]);
        }
        else{
          alert("el codigo no es correcto");
        }
      });
    }
    else{
      alert("las dos contraseñas no coinciden")
    }


    
  }

}
