import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  signupForm: FormGroup;

constructor(private fb: FormBuilder, private router: Router) {
  this.signupForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

onSignup() {
  if (this.signupForm.valid) {
    localStorage.setItem('user', JSON.stringify(this.signupForm.value));
    alert('Signup successful!');
    this.router.navigate(['/login']);
  }
}

}
