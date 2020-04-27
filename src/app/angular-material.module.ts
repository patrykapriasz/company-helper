import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule} from '@angular/material/list'

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]

})
export class AngularMaterialModule {

}
