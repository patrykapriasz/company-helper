import { User } from '../user/user.model';
import { Product } from '../share/models/product.model';
import { Warehouse } from '../warehouse/warehouse.model';
import { ReportItem } from './report-item.model';

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
  warehouse: Warehouse;
  reportItems: ReportItem[];
  sampleTakerId:number;
}
