import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { appRoutes } from './app-routing.module'
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// components
import { Dashboard } from '../components/dashboard/dashboard';
import { Login } from '../components/login/login';
import { Navbar } from '../components/navbar/nabar';
import { Forms } from '../components/forms/forms';
//services
import { loginRoutes } from '../apis/login-api';

@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    Login,
    Navbar,
    Forms,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    loginRoutes,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
