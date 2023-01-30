import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuConexaoComponent } from './menu-conexao/menu-conexao.component';



@NgModule({
  declarations: [
    MenuConexaoComponent
  ],
  exports: [
    MenuConexaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuRotasModule { }
