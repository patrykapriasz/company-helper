import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:'root'})
export class DepartmentService {

  private departments: Department[];
  private updatedDepartment = new Subject<Department[]>();

  constructor(private http: HttpClient){}

  getAllDepartments() {
    this.http.get<{message: string, content: Department[]}>(environment.apiUrl+'/departments').subscribe((result)=>{
      this.departments = result.content;
      this.updatedDepartment.next([...this.departments])
    })
  };

}
