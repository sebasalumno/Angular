
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppbarComponent } from './appbar/appbar.component';
import { RegisterComponent } from './register/register.component';
import { RegisterbarComponent } from './registerbar/registerbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomebarComponent } from './homebar/homebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AppbarComponent,
    RegisterComponent,
    RegisterbarComponent,
    HomepageComponent,
    HomebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
