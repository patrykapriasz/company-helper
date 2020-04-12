import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

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
    ManagerTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
