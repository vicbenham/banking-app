import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TransactionDetail} from '../transaction.detail/transaction.detail';
import {ActivatedRoute, Router} from '@angular/router';
import {NavbarComponent} from '../../navbar/navbar';
import {TransactionService} from '../../service/transaction.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Account} from '../../models/account';
import {switchMap} from 'rxjs';
import {AccountInfosService} from '../../service/account.infos.service';

@Component({
  selector: 'app-transaction',
  imports: [ReactiveFormsModule, TransactionDetail, NavbarComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
    transactionForm: FormGroup;
   lastTransaction: any = null;
   private accountInfosService = inject(AccountInfosService);
   private route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id')!;

  account = toSignal<Account | undefined>(
    this.route.paramMap.pipe(
      switchMap(params => this.accountInfosService.getAccountById(params.get('id')!))
    ),
    { initialValue: undefined }
  );

    constructor(
      private fb: FormBuilder,
      private router: Router,
      private transactionService: TransactionService
    ) {
      this.transactionForm = this.fb.group({
        emitterAccountId: [''],
        receiverAccountId: ['', (Validators.required)],
        amount: ['', (Validators.required, Validators.min(1))],
        description: ['']
      });
    }


  submitTransaction() {
    if (this.transactionForm.invalid) return;

    this.transactionForm.patchValue({
      emitterAccountId: this.id
    });


    this.transactionService.sendTransaction(this.transactionForm.value)
      .subscribe({
        next: (transaction) => {
          this.router.navigate(['/transaction-detail'], {
            state: { transaction }
          });
        },
        error: (err) => {
          console.error("Error  :", err);
        }
      });
  }
}
