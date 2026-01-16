import { Component, computed, signal, OnInit } from '@angular/core';
import { FirstLetterIcon } from '../../first-letter-icon/first-letter-icon';
import { User } from '../../models/user';
import { TransactionInterface } from './transaction.interface';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-transaction-list',
  imports: [FirstLetterIcon],
  templateUrl: './transaction.list.html',
  styleUrls: ['./transaction.list.css'],
})
export class TransactionList implements OnInit {

  user = signal<User | undefined>(undefined);

  constructor(private auth: AuthService) {
    this.user.set(this.auth.getUser());
  }

  // Toutes les transactions
  transactions = signal<TransactionInterface[]>([]);

  // false = 5 dernières / true = toutes
  showAll = signal(false);

  // Transactions affichées (triées par date décroissante)
  displayedTransactions = computed(() => {
    const sorted = [...this.transactions()].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return this.showAll() ? sorted : sorted.slice(0, 5);
  });

  ngOnInit(): void {
    // 🔴 Données de test
    this.transactions.set([
      { id: 1, userName: 'Alice', date: '2026-01-14', amount: 120 },
      { id: 2, userName: 'Bob', date: '2026-01-13', amount: 50 },
      { id: 3, userName: 'Charlie', date: '2026-01-12', amount: 200 },
      { id: 4, userName: 'David', date: '2026-01-11', amount: 75 },
      { id: 5, userName: 'Emma', date: '2026-01-10', amount: 30 },
      { id: 6, userName: 'Franck', date: '2026-01-09', amount: 90 },
    ]);
  }

  showAllTransactions(): void {
    this.showAll.set(true);
  }
}
