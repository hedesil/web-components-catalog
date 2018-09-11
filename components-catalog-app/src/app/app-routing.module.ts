import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

const principalRoutes: Routes = [
  {path: 'principalDashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(principalRoutes)],
  exports: [RouterModule]

})

export class AppRoutingModule {
}


