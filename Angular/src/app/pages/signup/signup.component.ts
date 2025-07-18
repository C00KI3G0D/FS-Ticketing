import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  signupError: any;
  signupSuccess: any;
  public open: boolean = false;
  loginError: any;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Implement signup logic here
      this.signupSuccess = 'Signup successful!';
      this.signupError = null;
    } else {
      this.signupError = 'Please fill in the form correctly.';
      this.signupSuccess = null;
    }
  }

  toggle(): void {
    this.open = !this.open;
  }
}
