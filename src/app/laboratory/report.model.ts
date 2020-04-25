import { User } from '../user/user.model';
import { Product } from '../share/models/product.model';

export interface Report {
  id: number;
  user: User;
  sampleTaker: User,
  reportObject: string;
  source: string;
  data: object;
  description: string | null;
  product: Product
  createdAt: Date;
}
