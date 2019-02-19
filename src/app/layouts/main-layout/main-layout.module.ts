import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainLayoutRoutes} from './main-layout.router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //Se crea el mmódulo con todas las directivas de enrutado y un provider que registra las rutas
    RouterModule.forChild(MainLayoutRoutes)
  ]
})

export class MainLayoutModule {
}
