import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginRequest} from './login.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private base = 'https://coding-bank.fly.dev';

  constructor(private http: HttpClient) {}

  submit(data: LoginRequest) {
    return this.http.post(`${this.base}/auth/login`, data);
  }
}
