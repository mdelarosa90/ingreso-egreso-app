import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { OrdenIngresoEgresoPipe } from './ingreso-egreso/orden-ingreso-egreso.pipe';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    OrdenIngresoEgresoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ChartsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
