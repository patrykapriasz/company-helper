import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { RoleComponent } from './role/role.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path:'admin/user-create', component: UserCreateComponent },
  { path: 'admin/role-create', component: RoleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
