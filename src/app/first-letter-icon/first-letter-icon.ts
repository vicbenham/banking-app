import { Component, signal } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../login.service/auth.service';
import { FirstLetterPipe } from '../pipe/first-letter-pipe';
import { ProfileComponent } from '../profile.component/profile.component';

@Component({
  selector: 'first-letter-icon',
  imports: [FirstLetterPipe, ProfileComponent],
  templateUrl: './first-letter-icon.html',
  styleUrl: './first-letter-icon.css',
})
export class FirstLetterIcon {
  user = signal<User | undefined>(undefined);

  constructor(private auth: AuthService) {
    this.user.set(this.auth.getUser());
  }
}
