import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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
  tokenService: any;

  constructor(private http: HttpClient) {}

  refreshToken() {
    return this.http.post(`${this.apiUrl}/auth/refresh`, {
      token: this.tokenService.getToken()
    }).subscribe((response: any) => {
      this.tokenService.setToken(response.newAccessToken);
    });
  } 

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<void> (`${this.apiUrl}/login`, loginRequest, { withCredentials: true });
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