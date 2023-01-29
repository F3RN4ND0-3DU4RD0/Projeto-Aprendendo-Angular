import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompIndexComponent } from './comp-index/comp-index.component';



@NgModule({
  declarations: [
    CompIndexComponent
  ],
  exports: [
    CompIndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
