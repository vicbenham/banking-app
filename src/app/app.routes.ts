import { Routes } from '@angular/router';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {SendMoneyComponent} from './send.money';
import {InfosComponent} from './infos';
import {RegisterComponent} from './register';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'send',
  component: SendMoneyComponent
}, {
  path: 'infos',
  component: InfosComponent
}];
