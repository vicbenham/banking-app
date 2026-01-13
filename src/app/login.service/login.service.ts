import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginRequest} from './login.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private base = 'https://coding-bank.fly.dev';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest) {
    return this.http.post(`${this.base}/login`, data);
  }
}
