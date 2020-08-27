import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WarehouseService } from '../warehouse.service';
import { Product } from 'src/app/share/models/product.model';
import { ProductService } from 'src/app/share/services/product.service';
import { Supplier } from 'src/app/share/models/supplier.model';
import { SupplierService } from 'src/app/share/services/supplier.service';
import { Delivery } from './delivery.model';
import { DeliveryStatus } from 'src/app/share/Enums/delivery.enum';
import { DeliveryService } from './delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  transport: String;
  products: Product[];
  selectedProduct: Product;
  suppliers: Supplier[];
  selectedSupplier: Supplier;
  amount: Number;

  constructor(
    private warehouseService: WarehouseService,
    private productService: ProductService,
    private supplierService: SupplierService,
    private deliveryService: DeliveryService,
  ) { }

  addNewDelivery(form: NgForm) {
    const product: Product = {
      id: form.value.subject,
      name:null,
      symbol:null
    };

    const supplier: Supplier = {
      id: form.value.supplier,
      companyName: null
    };
    let delivery: Delivery = {
      id: null,
      status: DeliveryStatus.arrived,
      amount: form.value.amountInput,
      product: product,
      report: null,
      supplier: supplier
    }

    this.deliveryService.addNewDelivery(delivery);
  }

  getSuppliersByProduct(productId: any) {
    this.supplierService.getSuppliersByProduct(productId);
    this.supplierService.getUpdatedSuppliers().subscribe(result => {
      this.suppliers = result;
    })
  }

  ngOnInit(): void {
    this.productService.getAllProducts();
    this.productService.getUpdatedProductListener().subscribe(result => {
      this.products = result;
    })
  }

}
