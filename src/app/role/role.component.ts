import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  constructor(private roleService: RoleService) { }

  addNewRole(form: NgForm) {
    console.log('role component add role');
    this.roleService.addNewRole(form.value.name);
  }

  ngOnInit(): void {
  }

}
