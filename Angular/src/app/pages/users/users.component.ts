import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit{

  users: User[] = [];
  filteredUsers: User[] = [];

  idFilter: string = '';
  nameFilter: string = '';
  roleFilter: string = '';
  numberFilter: string = '';
  emailFilter: string = '';

  constructor(
    private userService: UserService
  ) {}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      this.filteredUsers = users;
    });
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
        this.filteredUsers = users;
      },
      error: (err: any) => console.log(err)
    });
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(this.nameFilter.toLowerCase()) &&
      user.role.toLowerCase().includes(this.roleFilter.toLowerCase()) &&
      user.number.toString().toLowerCase().includes(this.numberFilter.toLowerCase()) &&
      user.email.toLowerCase().includes(this.emailFilter.toLowerCase())
    );
  }
}
