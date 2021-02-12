import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  
  {path:"department" ,component: DepartmentListComponent},
  {path:"employees" ,component:EmployeeListComponent},
  {path:"contact" ,component: ContactComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allRoutes =[DepartmentListComponent,EmployeeListComponent,ContactComponent]

