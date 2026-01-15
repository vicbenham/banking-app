import { Component, inject, signal } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../login.service/auth.service';
import { RouterLink } from '@angular/router';
import { FirstLetterIcon } from '../first-letter-icon/first-letter-icon';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-profile.component',
  standalone: true,
  imports: [RouterLink, FirstLetterIcon, NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {

  user = signal<User | undefined>(undefined);

  constructor(private auth: AuthService) {
    this.user.set(this.auth.getUser());
  }

  logout(): void {
    console.log('Déconnexion', this.user()); 
    this.auth.logout();
  }
}
