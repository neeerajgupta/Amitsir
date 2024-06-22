import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashbordComponent ,canActivate:[authGuard]}
  ];
