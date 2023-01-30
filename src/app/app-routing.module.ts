import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importações das rotas do site
import { IndexComponent } from './pages/index/index.component';
import { ComponentClientComponent } from './pages/component-client/component-client.component';
import { ComponentSuperComponent } from './pages/component-super/component-super.component';
import { ComponentAdminComponent } from './pages/component-admin/component-admin.component';

const routes: Routes = [
  {path: '', component: IndexComponent, pathMatch:'full'},
  {path:'client', component: ComponentClientComponent},
  {path:'admin', component: ComponentAdminComponent},
  {path: 'super-user', component: ComponentSuperComponent},

  //Rota coringa
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
