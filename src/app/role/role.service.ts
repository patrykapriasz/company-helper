import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Role } from './role.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RoleService {

  private roles: Role[];
  private updatedRoles = new Subject<Role[]>();

  constructor(private http: HttpClient){}

  addNewRole(name:string){
    console.log("role service add new role");
    const role: Role = {
      id:null,
      name: name
    }
    this.http.post<{message: string, content: Role}>('http://localhost:3000/admin/create-role',role).subscribe(response => {
      this.roles.push(response.content);
      this.updatedRoles.next([...this.roles]);
    });
  };

  getAllRoles() {
    this.http.get<{message: string, roles:Role[]}>('http://localhost:3000/roles').subscribe((response) => {
      this.roles = response.roles;
      this.updatedRoles.next([...this.roles]);
    });
  };

  getRoleUpdateListener() {
    return this.updatedRoles.asObservable();
  }

}
