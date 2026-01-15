import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Transaction} from '../models/transaction';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({ providedIn: 'root' })
export class TransactionService {

  private base = 'https://coding-bank.fly.dev';

  constructor(private http: HttpClient,
              private auth: AuthService) {}

  sendTransaction(data: {emitterAccountId: string, receiverAccountId: string, amount: number, description: string}) {
    const user = this.auth.getUser()
    const headers = new HttpHeaders({Authorization: `Bearer ${user?.token}`});

    return this.http.post<any>(`${this.base}/transactions/emit`, data, { headers });
  }

  getTransactionId(){
    return this.http.get<Transaction[]>(`${this.base}/transactions/{transactionId}`)
  }
}
