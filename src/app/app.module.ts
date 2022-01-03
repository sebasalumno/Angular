
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppbarComponent } from './appbar/appbar.component';
import { RegisterComponent } from './register/register.component';
import { RegisterbarComponent } from './registerbar/registerbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomebarComponent } from './homebar/homebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilbarComponent } from './perfilbar/perfilbar.component';
import { OffersComponent } from './offers/offers.component';
import { OfferbarComponent } from './offerbar/offerbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OffersDialogComponent } from './offers-dialog/offers-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AppbarComponent,
    RegisterComponent,
    RegisterbarComponent,
    HomepageComponent,
    HomebarComponent,
    PerfilComponent,
    PerfilbarComponent,
    OffersComponent,
    OfferbarComponent,
    OffersDialogComponent,

  ],
  entryComponents:[OffersDialogComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule  ,
    MatSelectModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule, 
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
