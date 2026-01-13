import { Component } from '@angular/core';
import {LoginService} from '../login.service/login.service';
import {LoginRequest} from '../login.service/login.interface';

@Component({
  selector: 'app-login.component',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  clientCode = '';
  password = '';

  constructor(private auth: LoginService) {}

  submit() {
    const body: LoginRequest = {
      clientCode: this.clientCode,
      password: this.password,
    };

    this.auth.login(body).subscribe();
  }
}
