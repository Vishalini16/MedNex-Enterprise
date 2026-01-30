import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    // ❌ remove AppComponent from here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    // ✅ import standalone components
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PatientComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
