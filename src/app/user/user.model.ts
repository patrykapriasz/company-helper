import { Role } from '../role/role.model';

export interface User {
  id: Number;
  login: String;
  firstname: string;
  lastname: string;
  role: Role;
  password: String;
}
