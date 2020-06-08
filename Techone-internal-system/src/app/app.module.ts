import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutes } from './app-routing.module'
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// components
import { Dashboard } from '../components/dashboard/dashboard';
import { Login } from '../components/login/login';

@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    Login,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
