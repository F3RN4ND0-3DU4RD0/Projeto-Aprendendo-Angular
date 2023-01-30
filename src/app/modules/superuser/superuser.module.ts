import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSuperComponent } from '../../pages/component-super/component-super.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';



@NgModule({
  declarations: [
    ComponentSuperComponent,
  ],
  exports:[
    ComponentSuperComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class SuperuserModule { }
