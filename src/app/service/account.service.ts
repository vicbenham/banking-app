import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Account} from '../models/account';


@Injectable({ providedIn: 'root' })
export class AccountService {
  private base = 'https://coding-bank.fly.dev';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  createAccount(body: {initialBalance: number, label: string}) {
    const user = this.auth.getUser()
    const headers = new HttpHeaders({Authorization: `Bearer ${user?.token}`})
    return this.http.post(`${this.base}/accounts`, body, { headers })
  }

  getAccounts() {
    const user = this.auth.getUser()
    const headers = new HttpHeaders({Authorization: `Bearer ${user?.token}`})
    return this.http.get<Account[]>(`${this.base}/accounts`, { headers })
  }
}
