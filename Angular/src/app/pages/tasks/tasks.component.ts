import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskResponse } from '../../models/responses/task-response';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  tasks: TaskResponse[] = [];
  filteredTasks: TaskResponse[] = [];

  taskIdFilter: string = '';
  clientNameFilter: string = '';
  topicFilter: string = '';
  stateFilter: string = '';
  responsibleNameFilter: string = '';

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(tasks =>{
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTask().subscribe({
      next: (tasks: TaskResponse[]) => {
        this.tasks = tasks;
        this.filteredTasks = tasks;
      },
      error: (err: any) => console.log(err)
    });
  }

  filterTasks(): void {
    this.filteredTasks = this.tasks.filter(task =>
      task.taskId.toString().toLowerCase().includes(this.taskIdFilter.toLowerCase()) &&
      task.topic.toLowerCase().includes(this.topicFilter.toLowerCase()) &&
      task.clientName.toLowerCase().includes(this.clientNameFilter.toLowerCase()) &&
      task.state.toLowerCase().includes(this.stateFilter.toLowerCase()) &&
      task.resposibleName.toLowerCase().includes(this.responsibleNameFilter.toLowerCase())
    );
  }
}
