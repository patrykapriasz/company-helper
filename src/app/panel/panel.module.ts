import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    AngularMaterialModule,
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule {

}
