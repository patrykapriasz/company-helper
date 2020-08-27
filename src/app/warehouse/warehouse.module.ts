import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { WarehouseComponent } from './warehouse.component';
import { WarehousRouting } from './warehouse-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryPanelComponent } from './delivery/delivery-panel/delivery-panel.component';
import { DeliveryCardComponent } from './delivery/delivery-card/delivery-card.component';
import { PanelModule } from '../panel/panel.module';

@NgModule({
  declarations: [
    WarehouseComponent,
    DeliveryComponent,
    DeliveryPanelComponent,
    DeliveryCardComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    WarehousRouting,
    PanelModule,
  ]
})
export class WarehouseModule {

}
