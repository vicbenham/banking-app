import { Component, inject, signal } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../login.service/auth.service';
import { RouterLink } from '@angular/router';
import { FirstLetterPipe } from '../pipe/first-letter-pipe';
import { FirstLetterIcon } from '../first-letter-icon/first-letter-icon';

@Component({
  selector: 'app-profile.component',
  standalone: true,
  imports: [RouterLink, FirstLetterPipe, FirstLetterIcon],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {

  user = signal<User | undefined>(undefined);

  constructor(private auth: AuthService) {
    this.user.set(this.auth.getUser());
  }
}
