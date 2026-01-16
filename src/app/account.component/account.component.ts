import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AccountService} from '../service/account.service';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-account.component',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        NavbarComponent
    ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accSer: AccountService,
    private router: Router
  ) {
    this.accountForm = this.fb.group({
      label: ['', Validators.required],
      initialBalance: ['', [Validators.required, Validators.maxLength(9)]]
    });
  }

  create() {
    if (this.accountForm.invalid) return;

    this.accSer.createAccount(this.accountForm.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => console.log('ERROR'),
    });
  }
}

