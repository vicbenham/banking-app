import {Component, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar';
import { FirstLetterIcon } from '../../first-letter-icon/first-letter-icon';
import { Transaction } from '../../models/transaction';
import {DatePipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [
    NavbarComponent,
    FirstLetterIcon,
    RouterLink,
    NgClass,
    DatePipe,
  ],
  templateUrl: './transaction.detail.html',
  styleUrl: './transaction.detail.css',
})
export class TransactionDetail {

  transaction!: Transaction;
  canceled = false;
  timer: any;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.transaction = history.state['transaction'];
    console.log('transaction reçue = ', this.transaction);
    if (!this.transaction.date) {
      this.transaction.date = new Date();
    }


    // Timer 10 secondes si statut = PENDING
    if (this.transaction.status.toLowerCase() === 'pending') {
      this.timer = setTimeout(() => {
        if (!this.canceled) {
          this.transaction.status = 'success';
          this.cdr.detectChanges();
        }
      }, 10000);
    }

  }


  onCancel() {
    this.canceled = true;
    this.transaction.status = 'failed';
    clearTimeout(this.timer);
    this.cdr.detectChanges();
  }

}
