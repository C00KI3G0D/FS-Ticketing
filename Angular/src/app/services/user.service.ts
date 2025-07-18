import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly URL = "http://127.0.0.1:8080/api/users/"
    private apiUrl = "http://127.0.0.1:8080/api/addusers/"
    private loginUrl = "http://localhost:8080/api/auth/login"

    constructor(
        @Inject(HttpClient) private httpClient: HttpClient
    ) {

    }

    public getUsers(): Observable<User[]>{
        return this.httpClient.get<User[]>(this.URL);
    }

    createUser(userData:any){
        return this.httpClient.post(this.apiUrl,userData);
    }

    login(credentials: {email: string, password: string}): Observable<any> {
        return this.httpClient.post<String>(this.loginUrl, credentials);
    }
}
