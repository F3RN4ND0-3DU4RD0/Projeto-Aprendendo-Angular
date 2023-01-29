import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSuperComponent } from './component-super/component-super.component';



@NgModule({
  declarations: [
    ComponentSuperComponent
  ],
  exports:[
    ComponentSuperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SuperuserModule { }
