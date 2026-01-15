import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TransactionDetail} from '../transaction.detail/transaction.detail';
import { Router } from '@angular/router';
import {NavbarComponent} from '../../navbar/navbar';

@Component({
  selector: 'app-transaction',
  imports: [ReactiveFormsModule, TransactionDetail, NavbarComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
    transactionForm: FormGroup;
   lastTransaction: any = null;

    constructor(
      private fb: FormBuilder,
      private router: Router
    ) {
      this.transactionForm = this.fb.group({
        receiverAccountId: ['', (Validators.required)],
        amount: ['', (Validators.required, Validators.min(1))],
        description: ['']
      });
    }


submitTransaction() {
  if (this.transactionForm.invalid) {
    this.transactionForm.markAllAsTouched();
    return;
  }
   this.lastTransaction= this.transactionForm.value;
  this.router.navigate(['/transaction-details'], {
    state: { transaction: this.lastTransaction }
  });

  this.transactionForm.reset();
}
}
