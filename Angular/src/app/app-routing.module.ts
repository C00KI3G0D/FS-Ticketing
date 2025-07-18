import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'users',
    component: UsersComponent,
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  
  {
    path: 'adduser',
    component: AddUserComponent,
    loadChildren: () => import('./pages/add-user/add-user.module').then(m => m.AddUserModule)
  },
  
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'signup',
    component: SignupComponent,
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },

  {
    path: 'tasks',
    component: TasksComponent,
    loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
