import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from '../../report.model';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user/user.model';
import { ProductService } from 'src/app/share/services/product.service';
import { Product } from 'src/app/share/models/product.model';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { Warehouse } from 'src/app/warehouse/warehouse.model';
import { WarehouseService } from 'src/app/warehouse/warehouse.service';
import { ProductParameter } from 'src/app/share/models/productParameter.model';
import { ProductParameterService } from 'src/app/share/services/productParameter.service';
import { ReportItem } from '../../report-item.model';
import { ReportService } from '../../report.service';


@Component({
  selector: 'app-laboratory-report-create',
  templateUrl: './laboratory-report-create.component.html',
  styleUrls: ['./laboratory-report-create.component.scss']
})
export class LaboratoryReportCreateComponent implements OnInit, OnDestroy {

  report: Report;
  users: User[] = [];
  usersSubscription: Subscription;
  products: Product[] = [];
  productsSubscription: Subscription;
  warehouses: Warehouse[] = [];
  warehousesSubscription: Subscription;
  showParamOption: boolean = false;
  productParameters: ProductParameter[] = [];
  productParametersSubscription: Subscription;

  reportItems: ReportItem[]=[];

  constructor(private productService: ProductService,
    private userService: UserService,
    private warehouseService: WarehouseService,
    private productParameterService: ProductParameterService,
    private reportService: ReportService
    ) { }

  getParameters(productId: number) {
    this.productParameterService.getProductParameter(productId);
    this.productParametersSubscription = this.productParameterService.getUpdatedProductParameter().subscribe((productParametes: ProductParameter[]) => {
      this.productParameters = productParametes
    });
  }

  getWarehouses(productId: any) {
    this.warehouseService.getWarehouseByProduct(productId);
    this.warehousesSubscription = this.warehouseService.getWarehouseUpdated().subscribe(result => {

      this.warehouses = result;
    });
  }

  addReport(form: NgForm) {

    const sampleTaker: User = {
      id: form.value.sampleTaker,
      firstname:null,
      lastname:null,
      login: null,
      password:null,
      role: null
    }

    const subject: Product = {
      id: form.value.subject,
      name: null
    }
    const report:Report = {
      id: null,
      data: new Date(),
      source: form.value.warehouse,
      user:null,
      sampleTaker:sampleTaker,
      reportObject:form.value.subject,
      description: form.value.description,
      product: subject,
      createdAt: null
    }
    this.reportService.createReport(report,this.reportItems);
    form.resetForm();
  };

  addReportItem(reportItem: ReportItem) {
    const existingItem = this.reportItems.find(item => {
      if(item.parameter.id === reportItem.parameter.id) {
        return item;
      }
    })
    //const existingItem = this.reportItems.some(item=>item.parameter.id === reportItem.parameter.id)
    if(existingItem){
      if(existingItem.value !==reportItem.value){
        const index = this.reportItems.findIndex(item=>item.parameter.id === reportItem.parameter.id)
        this.reportItems.splice(index,1);
        this.reportItems.push(reportItem);
      }

    } else {
      this.reportItems.push(reportItem);
    }
    console.log(this.reportItems);
  }



  ngOnInit(): void {
    this.productService.getAllProducts();
    this.productsSubscription = this.productService.getUpdatedProductListener().subscribe((products: Product[]) => {
      this.products = products;
    });

    this.userService.getSampleTakers();
    this.usersSubscription = this.userService.getusersUpdateListener().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
    this.warehousesSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
  }
}
