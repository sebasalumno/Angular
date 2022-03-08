
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
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { PerfilbarComponent } from './perfilbar/perfilbar.component';
import { OffersComponent } from './offers/offers.component';
import { OfferbarComponent } from './offerbar/offerbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OffersDialogComponent } from './offers-dialog/offers-dialog.component';
//interceptors
import { AuthInterceptorService } from './auth-interceptor.service';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { InscriptionsbarComponent } from './inscriptionsbar/inscriptionsbar.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationbarComponent } from './confirmationbar/confirmationbar.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ChangepasswordbarComponent } from './changepasswordbar/changepasswordbar.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { StripeComponent } from './stripe/stripe.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { InscriptionsDialogComponent } from './inscriptions-dialog/inscriptions-dialog.component';
import { InscriptionDialogFreeComponent } from './inscription-dialog-free/inscription-dialog-free.component';

//para iniciar angular ng serve --proxy-config proxy.conf.json
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
    InscriptionsComponent,
    InscriptionsbarComponent,
    ConfirmationComponent,
    ConfirmationbarComponent,
    ChangepasswordComponent,
    ChangepasswordbarComponent,
    RecoverpasswordComponent,
    SubscriptionComponent,
    StripeComponent,
    SuccessComponent,
    FailureComponent,
    InscriptionsDialogComponent,
    InscriptionDialogFreeComponent,

  ],
  entryComponents:[OffersDialogComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
