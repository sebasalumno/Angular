import {NgModule}  from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../app/user/user.component';
import {LoginComponent} from '../app/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PerfilComponent } from './perfil/perfil.component';
import { OffersComponent } from './offers/offers.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'ofertas', component: OffersComponent },
  { path: 'inscripciones', component: InscriptionsComponent },
  { path: 'confirmacion', component: ConfirmationComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'recoverpassword', component: RecoverpasswordComponent },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
