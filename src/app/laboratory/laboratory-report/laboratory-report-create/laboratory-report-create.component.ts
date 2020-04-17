import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from '../../report.model';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user/user.model';
import { ProductService } from 'src/app/share/services/product.service';
import { Product } from 'src/app/share/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-laboratory-report-create',
  templateUrl: './laboratory-report-create.component.html',
  styleUrls: ['./laboratory-report-create.component.scss']
})
export class LaboratoryReportCreateComponent implements OnInit, OnDestroy {

  report: Report;
  users: User[] = [];
  products: Product[]=[];
  productsSubscription: Subscription;

  constructor(private productService: ProductService) { }

  addReport(form: NgForm) {

  };

  ngOnInit(): void {
    this.productService.getAllProducts();
    this.productsSubscription = this.productService.getUpdatedProductListener().subscribe((products: Product[]) => {

      this.products = products;
      console.log(this.products);
    });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
