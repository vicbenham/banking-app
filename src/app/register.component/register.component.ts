import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register.component',
  imports: [
    FormsModule,
    ReactiveFormsModule
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
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(6)]]
    });
  }

  submit() {
    const formData = this.registerForm.value;
    this.http.post(`${this.base}/auth/register`, formData).subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: () => {
        console.log("ERROR")
      }
    })
  }

}
