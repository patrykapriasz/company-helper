import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../share/models/task.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ManagerService {

  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor(private http: HttpClient){}

  createTask(task: Task) {
    this.http.post<{message:string, content: Task}>('http://localhost:3000/tasks',task).subscribe(result => {
      this.tasks.push(result.content);
      this.tasksUpdated.next([...this.tasks]);
    });
  }

  getTasks() {
    this.http.get<{message: string, content: Task[]}>('http://localhost:3000/tasks').subscribe(result => {
      this.tasks = result.content;
      this.tasksUpdated.next([...this.tasks])
    });
  }
}
