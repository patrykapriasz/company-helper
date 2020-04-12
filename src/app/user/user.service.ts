import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserService {

  private users: User[];
  private updatedUser = new Subject<User[]>();

  constructor(private http: HttpClient){

  }

  addNewUser(firstname:string, lastname:string,role:number){
    const user: User = {
      id:null,
      login:null,
      firstname:firstname,
      lastname:lastname,
      role:role
    };
    this.http.post<{message:string,userId:any}>('http://localhost:3000/admin/create-user',user)
      .subscribe(response =>{
        console.log(response);
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
