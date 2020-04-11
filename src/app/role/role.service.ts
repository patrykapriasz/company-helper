import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Role } from './role.model';

@Injectable({providedIn: 'root'})
export class RoleService {

  constructor(private http: HttpClient){}

  addNewRole(name:string){
    console.log("role service add new role");
    const role: Role = {
      id:null,
      name: name
    }
    this.http.post('http://localhost:3000/admin/create-role',role).subscribe();
    //this.http.get('http://127.0.0.1:3000/admin/check').subscribe();
  }

}
