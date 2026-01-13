import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,RouterLink
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private base = 'https://coding-bank.fly.dev';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      clientCode: ['', [Validators.required, Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.maxLength(6)]]
    });
  }

  submit() {
    const formData = this.loginForm.value;
    this.http.post(`${this.base}/auth/login`, formData).subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: () => {
        console.log("ERROR")
      }
    })
  }
clearPassword() {
  this.loginForm.get('password')?.setValue('');
}

}
