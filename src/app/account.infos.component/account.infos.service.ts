import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Account} from '../models/account';
import {AuthService} from '../login.service/auth.service';

@Injectable({ providedIn: 'root' })

export class AccountInfosService {

  private base = 'https://coding-bank.fly.dev';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  getAccountById(id: string) {
    const token = this.auth.getUser()?.token ?? '';
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<Account>(`${this.base}/accounts/${id}`, { headers });
  }


}
