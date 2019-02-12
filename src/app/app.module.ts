import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {MaterialModule} from './other-modules/material.module';
import { ComponentSidenavComponent } from './components/component-sidenav/component-sidenav.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainDashboardComponent,
    ComponentSidenavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
