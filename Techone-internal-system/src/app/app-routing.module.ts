import { Routes } from '@angular/router'
import { Login } from '../components/login/login';
import { Dashboard } from '../components/dashboard/dashboard';


export const appRoutes:Routes = [
  { path: 'login', component: Login },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'dashboard', component: Dashboard }
]