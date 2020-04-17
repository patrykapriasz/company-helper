import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LaboratoryComponent } from './laboratory/laboratory.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent},
  { path:'admin/user-create', component: UserComponent},
  { path: 'admin/role-create', component: RoleComponent},
  { path: 'manager', component: ManagerComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'laboratory', component: LaboratoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
