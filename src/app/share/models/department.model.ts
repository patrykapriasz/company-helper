import { User } from 'src/app/user/user.model';

export interface Department {
  id: Number;
  name: String;
  employee: User[];
}
