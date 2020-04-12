import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Role } from '../role.model';
import { User } from 'src/app/user/user.model';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit, OnDestroy {

  roles: Role[]=[];
  employeeWithRole: User[]=[];
  private rolesSubscription: Subscription;

  constructor(private service: RoleService) { }

  ngOnInit(): void {
    this.service.getAllRoles();
    this.rolesSubscription = this.service.getRoleUpdateListener().subscribe((roles:Role[])=>{
      this.roles = roles;
    });
  }

  ngOnDestroy(): void {
    this.rolesSubscription.unsubscribe();
  }
}
