import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {MaterialModule} from './other-modules/material.module';
import {FormsModule} from '@angular/forms';
import {ComponentSidenavComponent} from './components/component-sidenav/component-sidenav.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {ComponentsModule} from './components/components.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainDashboardComponent,
    ComponentSidenavComponent,
    MainLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
