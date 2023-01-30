//Importações do próprio Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importações de Módulos Angular
import { AdminModule } from './modules/admin/admin.module';
import { ClientModule } from './modules/client/client.module';
import { MenuRotasModule } from './modules/menu-rotas/menu-rotas.module';
import { SuperuserModule } from './modules/superuser/superuser.module';

//Importações de componentes
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    AdminModule,
    SuperuserModule,
    MenuRotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
