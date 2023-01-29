import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentClientComponent } from './component-client/component-client.component';



@NgModule({
  declarations: [
    ComponentClientComponent
  ],
  exports:[
    ComponentClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
