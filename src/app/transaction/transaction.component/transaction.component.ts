import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-transaction.component',
  imports: [ReactiveFormsModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
    transactionForm: FormGroup;

    constructor(
      private fb: FormBuilder
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

  console.log('Transaction envoyée', this.transactionForm.value);
  this.transactionForm.reset();
}
}
