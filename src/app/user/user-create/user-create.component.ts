import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addNewUser(form:NgForm){
    this.userService.addNewUser(form.value.firstname,form.value.lastname,form.value.role);
  }
}
