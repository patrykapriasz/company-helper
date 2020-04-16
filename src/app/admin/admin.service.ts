import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../user/user.model';

@Injectable({providedIn: 'root'})
export class AdminService {

  constructor(private http: HttpClient){

  }

}
