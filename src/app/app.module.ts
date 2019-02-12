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

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
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
