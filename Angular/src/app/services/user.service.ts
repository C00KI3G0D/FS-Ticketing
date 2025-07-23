import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User";
import { SignupRequest } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly URL = "http://127.0.0.1:8080/api/users/"
    private apiUrl = "http://127.0.0.1:8080/api/"
    private loginUrl = "http://localhost:8080/api/auth/login"
    private signupUrl = "http://localhost:8080/api/auth/signup"

    constructor(
        private httpClient: HttpClient
    ) {

    }

    public getUsers(): Observable<User[]>{
        return this.httpClient.get<User[]>(this.URL);
    }

    createUser(userData:any){
        return this.httpClient.post(this.apiUrl,userData);
    }

    login(credentials: {email: string, password: string}): Observable<HttpResponse<{ message: string }>> {
        return this.httpClient.post<HttpResponse<{ message: string }>>(this.loginUrl, credentials, {
            withCredentials: true
        });
    }
    
    signup(credentials: SignupRequest): Observable<HttpResponse<{ message: string }>> {
        return this.httpClient.post<HttpResponse<{ message: string }>>(this.signupUrl, credentials, {
            withCredentials: true
        });
    }
}
