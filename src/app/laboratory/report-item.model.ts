import { ProductParameter } from '../share/models/productParameter.model';

export interface ReportItem {
  id: number;
  productParameter: ProductParameter;
  value: number;
}
