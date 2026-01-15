import { Routes } from '@angular/router';
import {LoginComponent} from './login.component/login.component';
import {TransactionComponent} from './transaction/transaction.component/transaction.component';
import {RegisterComponent} from './register.component/register.component';
import {HomeComponent} from './home.component/home.component';
import {AccountComponent} from './account.component/account.component';
import { ProfileComponent } from './profile.component/profile.component';
import {AccountInfosComponent} from './account.infos.component/account.infos.component';
import {TransactionDetail} from './transaction/transaction.detail/transaction.detail';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
},{
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'account',
  component: AccountComponent
}, {
  path: 'accounts/:id',
  component: AccountInfosComponent
}, {
    path: 'transaction',
    component: TransactionComponent
}, {
  path: 'transaction-details',
  component: TransactionDetail
}];
