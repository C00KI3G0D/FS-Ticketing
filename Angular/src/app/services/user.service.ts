import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { UserResponse } from "../models/responses/user-response";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly URL = `${environment.apiUrl}/users/`;

    constructor(
        private httpClient: HttpClient
    ) {

    }

    public getUsers(): Observable<UserResponse[]>{
        return this.httpClient.get<UserResponse[]>(this.URL);
    }

    public createUser(userData:any){
        return this.httpClient.post(this.URL, userData, { observe: 'response', withCredentials: true });
    }
}
