import { Component } from '@angular/core';
import { AuthService } from '../login.service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
  <nav class="w-full bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <div class="flex-1 flex justify-center md:justify-start">
          <img 
            src="assets/bank-logo.png"
            alt="Logo banque"
            class="h-10 w-auto object-contain"
          />
        </div>

        <!-- Déconnexion (toujours affiché) -->
        <div class="flex items-center">
          <button 
            class="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Déconnexion"
            (click)="logout()"
          >
            <img 
              src="assets/icon-déconnection.png"
              alt="Déconnexion"
              class="h-6 w-6"
            />
          </button>
        </div>

      </div>
    </div>
  </nav>
  `
})
export class NavbarComponent {
  constructor(public auth: AuthService) {}

  logout(): void {
    console.log('Déconnexion'); 
    this.auth.logout();
  }
}
