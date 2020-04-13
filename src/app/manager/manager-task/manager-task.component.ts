import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/share/services/department.service';
import { Department } from 'src/app/share/models/department.model';

@Component({
  selector: 'app-manager-task',
  templateUrl: './manager-task.component.html',
  styleUrls: ['./manager-task.component.scss']
})
export class ManagerTaskComponent implements OnInit {

  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getAllDepartments();
  }

}
