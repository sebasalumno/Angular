import {NgModule}  from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../app/user/user.component';
import {LoginComponent} from '../app/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PerfilComponent } from './perfil/perfil.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'ofertas', component: OffersComponent },
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
