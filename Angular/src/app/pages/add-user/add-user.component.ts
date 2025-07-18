import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe({
        next: (response) => {
          console.log('User created:', response);
          this.userForm.reset();
          
        },
        error: (err) => {
          console.error('Error creating user:', err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
