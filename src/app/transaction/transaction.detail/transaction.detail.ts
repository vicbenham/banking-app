import {Component, Input} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NavbarComponent} from '../../navbar/navbar';
import {FirstLetterIcon} from '../../first-letter-icon/first-letter-icon';
import {formatDate, NgClass} from '@angular/common';
import {Transaction} from '../../models/transaction';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-transaction-detail',
  imports: [
    NavbarComponent,
    FirstLetterIcon,
    RouterLink,
    NgClass
  ],
  templateUrl: './transaction.detail.html',
  styleUrl: './transaction.detail.css',
})
export class TransactionDetail {
  transaction! : Transaction
  constructor(private router: Router) {
    this.transaction = history.state['transaction'];
    console.log('transaction reçue = ', this.transaction);
  }
}
