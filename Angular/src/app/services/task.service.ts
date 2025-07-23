import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { TaskResponse } from "../models/responses/task-response";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private readonly URL = `${environment.apiUrl}/tasks/`;

    constructor(
        private httpClient: HttpClient
    ) {

    }

    public getTask(): Observable<TaskResponse[]>{
        return this.httpClient.get<TaskResponse[]>(this.URL);
    }

    public createTask(taskData:any){
        return this.httpClient.post(this.URL, taskData, { observe: 'response', withCredentials: true });
    }
}
