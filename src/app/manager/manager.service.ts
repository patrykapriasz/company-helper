import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

import { Task } from '../share/models/task.model';

@Injectable({providedIn: 'root'})
export class ManagerService {

  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor(private http: HttpClient){}

  createTask(task: Task) {
    this.http.post<{message:string, content: Task}>(environment.apiUrl+'/tasks',task).subscribe(result => {
      this.tasks.push(result.content);
      this.tasksUpdated.next([...this.tasks]);
    });
  }

  getTasks() {
    this.http.get<{message: string, content: Task[]}>(environment.apiUrl+'/tasks').subscribe(result => {
      this.tasks = result.content;
      this.tasksUpdated.next([...this.tasks])
    });
  }
}
