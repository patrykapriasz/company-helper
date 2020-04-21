import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {

  constructor(private roleService: RoleService) { }

  addNewRole(form: NgForm) {
    console.log('role component add role');
    this.roleService.addNewRole(form.value.name);
    form.reset();
  }

  ngOnInit(): void {
  }

}
