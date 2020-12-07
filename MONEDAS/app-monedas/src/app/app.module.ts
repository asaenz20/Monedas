//importaciones
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


//componentes
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import {InicioComponent} from './inicio/inicio.component';
import { MonedaComponent } from './moneda/moneda.component';
//Servicios propios
import { MonedasService } from './monedas.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    MonedaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'lista', component:ListaComponent},
      {path:'moneda/:id',component:MonedaComponent},
      {path:'inicio',component:InicioComponent},
      {path:'', redirectTo:'inicio', pathMatch:'full'},
      {path:'**', redirectTo:'inicio',pathMatch:'full'}
    ],{useHash:true})
  ],
  providers: [MonedasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
