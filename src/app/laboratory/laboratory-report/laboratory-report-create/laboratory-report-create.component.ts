import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-laboratory-report-create',
  templateUrl: './laboratory-report-create.component.html',
  styleUrls: ['./laboratory-report-create.component.scss']
})
export class LaboratoryReportCreateComponent implements OnInit, OnDestroy {

  reportId: Number;
  createForm: NgForm;

  report: Report;
  reportSubscription: Subscription;
  users: User[] = [];
  usersSubscription: Subscription;
  products: Product[] = [];
  productsSubscription: Subscription;
  warehouses: Warehouse[] = [];
  warehousesSubscription: Subscription;
  showParamOption: boolean = false;
  productParameters: ProductParameter[] = [];
  productParametersSubscription: Subscription;
  userSampleTaker: User;

  reportItems: ReportItem[]=[];

  mode = "create";

  constructor(private productService: ProductService,
    private userService: UserService,
    private warehouseService: WarehouseService,
    private productParameterService: ProductParameterService,
    private reportService: ReportService,
    private route: ActivatedRoute
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
      role: null,
    };

    const subject: Product = {
      id: form.value.subject,
      name: null,
      symbol: null
    };

    let report:Report = {
      id: null,
      data: new Date(),
      source: form.value.warehouse,
      user:null,
      sampleTaker:sampleTaker,
      reportObject:form.value.subject,
      description: form.value.description,
      product: subject,
      createdAt: null,
      warehouse: null,
      reportItems: null,
      sampleTakerId: null
    };
    if(this.mode === 'create') {
      this.reportService.createReport(report,this.reportItems);
    } else {
      report.id = this.report.id;
      this.reportService.updateReport(report,this.reportItems);
    }

    form.resetForm();
  };

  addReportItem(reportItem: ReportItem) {
    const existingItem = this.reportItems.find(item => {
      if(item.productParameter.id === reportItem.productParameter.id) {
        return item;
      }
    })
    if(existingItem){
      if(existingItem.value !== reportItem.value){
        const index = this.reportItems.findIndex(item=>item.productParameter.id === reportItem.productParameter.id)
        this.reportItems.splice(index,1);
        this.reportItems.push(reportItem);
      }

    } else {
      this.reportItems.push(reportItem);
    }
    console.log(this.reportItems);
  }

  updateReportItem(event,productParam: ProductParameter) {
    const existingItem = this.reportItems.find(item => {
      if(item.productParameter.id === productParam.id) {
        item.value = event.value
      }
    });
  }


  setParameterValue(parameter: ProductParameter) {
    let existingValue = 0;

    this.reportItems.find(item => {
      if(item.productParameter.id=== parameter.id) {
        existingValue =  item.value;
      }
    });

    return existingValue;
  }

  getUser(id: number) {
    let sampleTaker: User=null;
    const existing = this.users.find((user)=>{
      if(user.id === id) {
        sampleTaker = user
      }
    })
    console.log(sampleTaker);
    return sampleTaker;
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('reportId')) {
        this.mode = "edit";
        this.userService.getSampleTakers();
        this.usersSubscription = this.userService.getusersUpdateListener().subscribe((users: User[]) => {
          this.users = users;
          this.reportId = Number(paramMap.get('reportId'));
          this.report = this.reportService.getReportById(this.reportId);
          this.reportItems = this.report.reportItems;
          this.getWarehouses(this.report.product.id);
          this.getParameters(this.report.product.id);
          this.report.sampleTaker = this.getUser(this.report.sampleTakerId)

        });



      } else {
        this.mode = 'create';
        this.reportId = null;

        this.productService.getAllProducts();
        this.productsSubscription = this.productService.getUpdatedProductListener().subscribe((products: Product[]) => {
          this.products = products;
          console.log(this.products);
        });
        this.userService.getSampleTakers();
        this.usersSubscription = this.userService.getusersUpdateListener().subscribe((users: User[]) => {
          console.log(users);
          this.users = users;
        });
      }
    });
  }

  ngOnDestroy(): void {
    if(this.warehousesSubscription) {
      this.warehousesSubscription.unsubscribe();
    }
    if(this.productParametersSubscription) {
      this.productParametersSubscription.unsubscribe();
    }
    if(this.reportSubscription) {
      this.reportSubscription.unsubscribe();
    }
    if(this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
    if(this.usersSubscription){
      this.usersSubscription.unsubscribe();
    }
  }
}
