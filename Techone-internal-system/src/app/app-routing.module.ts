import { Routes } from '@angular/router'
import { Login } from '../components/login/login';
import { Dashboard } from '../components/dashboard/dashboard';
import { Forms } from '../components/forms/forms';
import { Account } from '../components/createAccount/account';


export const appRoutes:Routes = [
  { path: 'login', component: Login },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'createAccount', component: Account},
  { path: 'dashboard', component: Dashboard },
  { path: 'forms', component: Forms }
]