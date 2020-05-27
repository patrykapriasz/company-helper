import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { RoleCreateComponent } from './role/role-create/role-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManagerComponent } from './manager/manager.component';
import { ManagerTaskComponent } from './manager/manager-task/manager-task.component';

import { AuthInterceptor } from './auth/auth-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from './angular-material.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { AuthModule } from './auth/auth.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    RoleComponent,
    UserCreateComponent,
    RoleListComponent,
    RoleCreateComponent,
    UserListComponent,
    ManagerComponent,
    ManagerTaskComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularMaterialModule,
    LaboratoryModule,
    AuthModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    WarehouseModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
