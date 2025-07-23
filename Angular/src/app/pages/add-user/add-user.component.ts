import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})

export class AddUserComponent implements OnInit {
  public open: boolean = false;
  userForm: FormGroup;
  userError: string = '';
  userSuccess: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.minLength(9)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void { }

  toggle(): void { this.open = !this.open; }

  onSubmit() {
    this.userError = '';
    this.userSuccess = '';

    if (this.userForm.valid) {
      let subscription: Subscription = this.authService.user(this.userForm.value).subscribe({
        
        next: (response: HttpResponse<{ message: string }>) => {
          if (response.ok === false) {
            this.userError = response.body ? response.body.message : "Erro ao criar o utilizador'";
            return
          }
          console.log(response)
          console.log(" !");
          this.userSuccess = 'Utilizador criado com sucesso!';
        },
    
        error: (error: HttpErrorResponse) => {
          console.log("Error:", error);
          this.userError = error.error.message;
        },

        complete: () => {
          subscription.unsubscribe();
        }
      });
    }
  }
}
