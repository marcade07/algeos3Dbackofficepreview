import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { OtherProductsComponent } from './components/other-products/other-products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FinancesComponent } from './components/finances/finances.component';
import { CarriersComponent } from './components/carriers/carriers.component';
import { DataExportComponent } from './components/data-export/data-export.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ConfectionsComponent } from './components/confections/confections.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'confections', component: ConfectionsComponent },
  { path: 'other-products', component: OtherProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'finances', component: FinancesComponent },
  { path: 'carriers', component: CarriersComponent },
  { path: 'data-export', component: DataExportComponent },
  { path: 'settings', component: SettingsComponent }
];