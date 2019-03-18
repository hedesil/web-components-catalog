import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {ComponentCardComponent} from './components/component-card/component-card.component';
import {SummaryCardComponent} from './components/summary-card/summary-card.component';

const principalRoutes: Routes = [
  {path: '', redirectTo: 'dashboard/(sidebar:summaryCard)', pathMatch: 'full'},
  {
    path: 'dashboard',
    component: MainDashboardComponent,
    children: [
      {path: '', redirectTo: 'summaryCard', pathMatch: 'full'},
      {path: 'summaryCard', component: SummaryCardComponent, outlet: 'sidebar'},
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


