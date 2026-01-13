import { Routes } from '@angular/router';
import {InfosComponent} from './infos';
import {LoginComponent} from './login.component/login.component';
import {TransactionComponent} from './transaction.component/transaction.component';
import {RegisterComponent} from './register.component/register.component';
import {HomeComponent} from './home.component/home.component';

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
  path: 'transaction',
  component: TransactionComponent
}, {
  path: 'infos',
  component: InfosComponent
}];
