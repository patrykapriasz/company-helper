import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { RoleComponent } from '../role/role.component';
import { Role } from '../role/role.model';

@Injectable({providedIn: 'root'})
export class UserService {

  private users: User[];
  private updatedUser = new Subject<User[]>();

  constructor(private http: HttpClient){

  }

  addNewUser(firstname:string, lastname:string,role:number, password: string){
    const userRole:Role = {
      id: role,
      name:''
    }
    const user: User = {
      id:null,
      login:null,
      firstname:firstname,
      lastname:lastname,
      role: userRole,
      password: password
    };
    this.http.post<{message:string,userId:any}>('http://localhost:3000/admin/create-user',user)
      .subscribe(response =>{
        user.id = response.userId;
        this.users.push(user);
        this.updatedUser.next([...this.users])
      });
  };

  getAllUsers() {
    this.http.get<{message:string, content:User[]}>('http://localhost:3000/users').subscribe((response) => {
      this.users = response.content;
      this.updatedUser.next([...this.users]);
    });
  };

  getusersUpdateListener() {
    return this.updatedUser.asObservable();
  }
}
