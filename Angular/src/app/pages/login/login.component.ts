
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { HttpResponse } from '@angular/common/http';
import { LoginResponse } from '../../models/responses/login-response';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public open: boolean = false;
  loginForm: FormGroup;
  loginError: string = '';
  loginSuccess: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  toggle(): void {
    this.open = !this.open;
  }

  onSubmit(): void {
    this.loginError = '';
    this.loginSuccess = '';
    if (this.loginForm.valid) {
      let subscription: Subscription = this.authService.login(this.loginForm.value).subscribe({
        next: (response: HttpResponse<LoginResponse>) => {
          if(response.ok === false) {
            this.loginError = 'Login invalido.';
            return
          };

          if(response.body == null) {
            this.loginError = 'Login invalido.';
            return
          };
          
          this.loginSuccess = 'User signed-in successfully!.';
          
          localStorage.setItem('accessToken', response.body.accessToken)

          this.router.navigate(['/'])
        }, 
        error: (error: any) => {
          this.loginError = 'Please fill in all required fields correctly.';
        },
        complete: () => {
          subscription.unsubscribe();
        }
      });

    } else {
      this.loginError = 'Please fill in all required fields correctly.';
    }
  }
}
