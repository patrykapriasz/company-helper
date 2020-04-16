import { User } from '../user/user.model';

export interface Report {
  id: number;
  author: User;
  reportObject: string;
  source: string;
  data: object;
}
