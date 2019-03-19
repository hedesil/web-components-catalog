import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {ComponentCardComponent} from './components/component-card/component-card.component';
import {SummaryCardComponent} from './components/summary-card/summary-card.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

// const principalRoutes: Routes = [
//   {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
//   {
//     path: 'dashboard',
//     component: MainDashboardComponent,
//     children: [
//       {path: '', redirectTo: 'summaryCard', pathMatch: 'full'},
//       {path: 'summaryCard', component: SummaryCardComponent, outlet: 'sidebar'},
//       {path: 'singleCard', component: ComponentCardComponent, outlet: 'sidebar'},
//     ]
//   },
//   {path: 'singleCard', component: ComponentCardComponent},
// ];

const routes: Routes = [
  {path: '', component: SidebarComponent, outlet: 'sidebar'},
  {path: 'summaryCard', component: SummaryCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


