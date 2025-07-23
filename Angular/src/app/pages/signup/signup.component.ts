import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  public open: boolean = false;
  signupForm: FormGroup;
  signupError: string = '';
  signupSuccess: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.minLength(9)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void { }

  toggle(): void { this.open = !this.open; }

  redirectToLogin(): void { this.router.navigate(['/login']); }
    
  onSubmit(): void {
    this.signupError = '';
    this.signupSuccess = '';

    if (this.signupForm.valid) {
      let subscription: Subscription = this.authService.signup(this.signupForm.value).subscribe({
        
        next: (response: HttpResponse<{ message: string }>) => {
          if (response.ok === false) {
            this.signupError = response.body ? response.body.message : "Erro ao criar o utilizador'";
            return
          }
          console.log(response)
          console.log(" !");
          this.signupSuccess = 'Utilizador criado com sucesso!';
          this.router.navigate(['/login']);
        },

        error: (error: HttpErrorResponse) => {
          console.log("Error:", error);
          this.signupError = error.error.message;
        },

        complete: () => {
          subscription.unsubscribe();
        }
      });
    }
  }
}
