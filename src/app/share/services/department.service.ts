import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department.model';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class DepartmentService {

  private departments: Department[];
  private updatedDepartment = new Subject<Department[]>();

  constructor(private http: HttpClient){}

  getAllDepartments() {
    this.http.get<{message: string, content: Department[]}>('http://localhost:3000/departments').subscribe((result)=>{
      this.departments = result.content;
      this.updatedDepartment.next([...this.departments])
    })
  };

}
