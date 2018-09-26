import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PrincipalDashboardComponent} from './principal-dashboard/principal-dashboard.component';

const principalRoutes: Routes = [
  {path: 'principalDashboard', component: PrincipalDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(principalRoutes)],
  exports: [RouterModule]

})

export class AppRoutingModule {
}


