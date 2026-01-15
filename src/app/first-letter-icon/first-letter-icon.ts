import { Component, signal } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../login.service/auth.service';
import { FirstLetterPipe } from '../pipe/first-letter-pipe';

@Component({
  selector: 'first-letter-icon',
  imports: [FirstLetterPipe],
  templateUrl: './first-letter-icon.html',
  styleUrl: './first-letter-icon.css',
})
export class FirstLetterIcon {
  user = signal<User | undefined>(undefined);

  constructor(private auth: AuthService) {
    this.user.set(this.auth.getUser());
  }
}
