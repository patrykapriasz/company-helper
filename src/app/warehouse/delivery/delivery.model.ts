import { DeliveryStatus } from 'src/app/share/Enums/delivery.enum';
import { Product } from 'src/app/share/models/product.model';
import { Report } from 'src/app/laboratory/report.model';
import { Supplier } from 'src/app/share/models/supplier.model';

export interface Delivery {
  id: Number,
  status: DeliveryStatus,
  product: Product,
  report: Report,
  supplier: Supplier,
  amount: Number,
}
