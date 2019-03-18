import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {ComponentCardComponent} from './components/component-card/component-card.component';

const principalRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    component: MainDashboardComponent,
    children: [
      {path: 'singleCard', component: ComponentCardComponent, outlet: 'sidebar'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(principalRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


