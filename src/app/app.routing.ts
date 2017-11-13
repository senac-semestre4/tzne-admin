import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { Erro404Component } from './pages/erro-404/erro-404.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component:  DashboardComponent},
  { path: 'app-erro-404', component: Erro404Component },
  { path: '**', redirectTo: 'app-erro-404' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
