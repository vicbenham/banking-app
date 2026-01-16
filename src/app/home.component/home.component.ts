import {Component, inject, signal, computed, effect} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../models/user';
import {RouterLink} from '@angular/router';
import {AccountService} from '../service/account.service';
import {toSignal} from '@angular/core/rxjs-interop';
import { Account } from '../models/account';
import { NavbarComponent } from '../navbar/navbar';
import { TransactionList } from '../transaction/transaction.list/transaction.list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TransactionList, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user = signal<User | undefined>(undefined);
  private accountService = inject(AccountService)
  signalAccounts = toSignal(this.accountService.getAccounts())

  selectedAccountId = signal<string | null>(null);
  selectedAccount = computed(() => {
    const id = this.selectedAccountId();
    if (!id) return undefined;
    return (this.signalAccounts() ?? []).find((a: Account) => a.id === id);
  });

  onAccountChange(event: Event) {
    const id = (event.target as HTMLSelectElement).value;
    this.selectedAccountId.set(id);
  }

  constructor(
    private auth: AuthService,
  ) {
    this.user.set(this.auth.getUser());
    console.log('USER FROM STORAGE', this.user());

    effect(() => {
      const accounts = this.signalAccounts() ?? [];
      if (!this.selectedAccountId() && accounts.length) {
        this.selectedAccountId.set(accounts[0].id);
      }
    });
  }
}
