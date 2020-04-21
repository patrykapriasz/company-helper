import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../user.service';
import { RoleService } from 'src/app/role/role.service';
import { Role } from 'src/app/role/role.model';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit, OnDestroy {

  roles: Role[] = [];
  private rolesSubscription: Subscription;

  constructor(private userService: UserService, private roleService: RoleService) { }

  addNewUser(form:NgForm){
    if(form.invalid) {
      return;
    }
    this.userService.addNewUser(form.value.firstname,form.value.lastname,form.value.role, form.value.password);
    form.reset();
  }

  ngOnInit(): void {
    this.roleService.getAllRoles();
    this.rolesSubscription = this.roleService.getRoleUpdateListener().subscribe((roles:Role[]) => {
      this.roles = roles;
    })
  };

  ngOnDestroy(): void {
    this.rolesSubscription.unsubscribe();
  };

}
