import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = [
    { id: 1, topic: 'Task 1', clientName: 'Client A', state: 'Open', responsible: 'John' },
    { id: 2, topic: 'Task 2', clientName: 'Client B', state: 'In Progress', responsible: 'Jane' },
    { id: 3, topic: 'Task 3', clientName: 'Client C', state: 'Closed', responsible: 'Doe' }
  ];
  filteredTasks = [...this.tasks];

  idFilter: string = '';
  topicFilter: string = '';
  clientNameFilter: string = '';
  stateFilter: string = '';
  responsibleFilter: string = '';

  constructor() {}

  ngOnInit(): void {
    this.filterTasks();
  }

  filterTasks(): void {
    this.filteredTasks = this.tasks.filter(task =>
      task.id.toString().toLowerCase().includes(this.idFilter.toLowerCase()) &&
      task.topic.toLowerCase().includes(this.topicFilter.toLowerCase()) &&
      task.clientName.toLowerCase().includes(this.clientNameFilter.toLowerCase()) &&
      task.state.toLowerCase().includes(this.stateFilter.toLowerCase()) &&
      task.responsible.toLowerCase().includes(this.responsibleFilter.toLowerCase())
    );
  }
}
