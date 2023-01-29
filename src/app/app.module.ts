//Importações do próprio Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importações de Módulos Angular
import { AdminModule } from './pages/admin/admin.module';
import { ClientModule } from './pages/client/client.module';
import { SuperuserModule } from './pages/superuser/superuser.module';

//Importações de componentes
import { MenuComponent } from './shared/menu/menu.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    AdminModule,
    SuperuserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
