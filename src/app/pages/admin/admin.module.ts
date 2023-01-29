import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAdminComponent } from './component-admin/component-admin.component';



@NgModule({
  declarations: [
    ComponentAdminComponent
  ],
  exports:[
    ComponentAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
