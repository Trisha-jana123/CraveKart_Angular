import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router)

{

  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

onLogin() {
  if (this.loginForm.valid) {
    const userData = localStorage.getItem('user');

    if (userData) {
      const storedUser = JSON.parse(userData);
      const { email, password } = this.loginForm.value;

      if (storedUser.email === email && storedUser.password === password) {
  alert('Login successful!');

  localStorage.setItem('loggedInUser', JSON.stringify(storedUser));

  this.router.navigate(['/']);
}
 else {
        alert('Invalid credentials');
      }
    } else {
      alert('No user found. Please sign up first.');
    }
  }
}

}
