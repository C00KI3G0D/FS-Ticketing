
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { HttpResponse } from '@angular/common/http';

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

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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
      let subscription: Subscription = this.userService.login(this.loginForm.value).subscribe({
        next: (response: HttpResponse<{ message: string }>) => {
          if(response.ok === true) return;

          console.log("Success!");
          this.loginSuccess = 'User signed-in successfully!.';

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
