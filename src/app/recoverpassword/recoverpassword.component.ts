import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inicio } from '../models/inicio';
import { Empresa } from '../models/user';
import { Usuario } from '../models/usuario';
import { AuthenticationService } from '../services/authentication.service';
import { RecoverService } from '../services/recover.service';
import { SendpasswordcodeService } from '../services/sendpasswordcode.service';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit {


username!: string;
password!: string;
user!:Usuario;
inicio!:Inicio;

constructor(private router: Router,private auth:RecoverService,private passcode:SendpasswordcodeService) { 

    
}

  ngOnInit(): void {
  }

  login() : void {
    this.user={
    email:this.username,
    password:this.password,
    }
  
    
      this.auth.login(this.user).subscribe((resp)=>{
        var empresa = resp.body as Empresa;

        this.inicio={
          id:Number(empresa.id.toString())
        }
        console.log(this.inicio)
        this.passcode.sendcode(this.inicio).subscribe((resp) =>{
          console.log(resp)
          if(resp == true){
          this.router.navigate(["changepassword"]);
          }else{
    
          }
        });
        
      });
    }

}
