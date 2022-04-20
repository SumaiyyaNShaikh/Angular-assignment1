import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgePipe } from './age.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDashboardComponent } from './person-dashboard/person-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDashboardComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
