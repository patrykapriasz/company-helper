import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { WarehouseComponent } from './warehouse.component';
import { WarehousRouting } from './warehouse-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';

@NgModule({
  declarations: [
    WarehouseComponent,
    DeliveryComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    WarehousRouting
  ]
})
export class WarehouseModule {

}
