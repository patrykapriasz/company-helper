import { User } from '../user/user.model';

export interface Report {
  id: number;
  author: User;
  sampleTaker: User,
  reportObject: string;
  source: string;
  data: object;
  description: string | null;
}
