import {Component, inject, signal} from '@angular/core';
import { AuthService } from '../login.service/auth.service';
import { User } from '../models/user';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user = signal<User | undefined>(undefined);
  private accountService = inject(AccountService)
  signalAccounts = toSignal(this.accountService.getAccounts())

  constructor(
    private auth: AuthService,
  ) {
    this.user.set(this.auth.getUser());
    console.log('USER FROM STORAGE', this.user());
  }
}
