import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';

const principalRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: MainLayoutComponent, children: [
      {
        path: '',
        loadChildren: './layouts/main-layout/main-layout.module#MainLayoutModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(principalRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


