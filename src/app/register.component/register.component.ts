import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../login.service/auth.service';
import {LoginResponse} from '../login.service/login.interface';

@Component({
  selector: 'app-register.component',
  imports: [
    FormsModule,
    ReactiveFormsModule, RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  private base = 'https://coding-bank.fly.dev';
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(6)]]
    });
  }

  submit() {
    const formData = this.registerForm.value;
    this.http.post<LoginResponse>(`${this.base}/auth/register`, formData).subscribe({
      next: (response) => {
        this.authService.storeSession(response)
        this.router.navigate([''])
      },
      error: () => {
        console.log("ERROR")
      }
    })
  }

  clearPassword() {
    this.registerForm.get('password')?.setValue('');
  }
}
