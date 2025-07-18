import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
}

export interface JwtAuthResponse {
  accessToken: string;
  tokenType: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<JwtAuthResponse> {
    return this.http.post<JwtAuthResponse>(`${this.apiUrl}/login`, loginRequest).pipe(
      tap(response => {
        localStorage.setItem('accessToken', response.accessToken);
      })
    );
  }

  signup(signupRequest: SignupRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, signupRequest);
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