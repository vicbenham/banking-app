import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {NavbarComponent} from '../../navbar/navbar';

@Component({
  selector: 'app-transaction-detail',
  imports: [
    NavbarComponent
  ],
  templateUrl: './transaction.detail.html',
  styleUrl: './transaction.detail.css',
})
export class TransactionDetail {
  transaction: any;
  constructor(private router: Router) {
    this.transaction = history.state['transaction'];
    console.log('transaction reçue = ', this.transaction);
  }

}
