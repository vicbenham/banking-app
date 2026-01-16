import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FirstLetterIcon } from '../first-letter-icon/first-letter-icon';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports : [FirstLetterIcon, CommonModule, RouterModule],
  templateUrl : './navbar.html'
})
export class NavbarComponent {
  constructor(public auth: AuthService) {}

  logout(): void {
    console.log('Déconnexion');
    this.auth.logout();
  }
}
