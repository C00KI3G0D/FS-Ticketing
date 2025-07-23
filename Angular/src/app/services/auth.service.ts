import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../models/requests/login-request';
import { SignupRequest } from '../models/requests/signup-request';
import { LoginResponse } from '../models/responses/login-response';
import { AddUserRequest } from '../models/requests/adduser-request';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  tokenService: any;

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginRequest, { observe: 'response', withCredentials: true });
  }

  signup(signupRequest: SignupRequest): Observable<HttpResponse<{ message: string }>> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/signup`, signupRequest, { observe: 'response', withCredentials: true });
  }

  user(userRequest: AddUserRequest): Observable<HttpResponse<{ message: string }>> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/signup`, userRequest, { observe: 'response', withCredentials: true });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}