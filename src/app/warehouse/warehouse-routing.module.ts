import { Routes, RouterModule } from "@angular/router";
import { WarehouseComponent } from './warehouse.component';
import { AuthGuard } from '../auth/auth.guard';
import { NgModule } from '@angular/core';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [
  { path: '', component: WarehouseComponent, canActivate:[AuthGuard], children:[
    { path: 'delivery', component: DeliveryComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WarehousRouting {

}
