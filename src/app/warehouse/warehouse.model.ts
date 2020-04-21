import { Product } from '../share/models/product.model';

export interface Warehouse {
  id: number;
  name: string;
  product: Product;
}
