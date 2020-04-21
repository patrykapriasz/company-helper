import { ProductParameter } from '../share/models/productParameter.model';

export interface ReportItem {
  id: number;
  parameter: ProductParameter;
  value: number;
}
