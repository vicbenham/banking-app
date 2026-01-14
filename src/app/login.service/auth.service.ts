import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { User } from '../models/user';
import { LoginResponse } from './login.interface';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = 'https://coding-bank.fly.dev';
  private currentUser?: User;

  constructor(private http: HttpClient, private router: Router) {}

  // Login
  login(body: { clientCode: string; password: string }) {
    return this.http.post<LoginResponse>(`${this.base}/auth/login`, body).pipe(
      tap((response) => {
        const user: User = {
          clientCode: response.user.clientCode,
          name: response.user.name,
          token: response.jwt,
        };

        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  // Récupérer l'utilisateur
  getUser(): User | undefined {
    if (this.currentUser) return this.currentUser;

    const stored = localStorage.getItem('user');
    if (!stored) return undefined;

    this.currentUser = JSON.parse(stored) as User;
    return this.currentUser;
  }

  // Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  // Déconnexion
  logout(): void {
    this.currentUser = undefined;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
