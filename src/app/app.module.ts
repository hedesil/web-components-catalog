import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {MaterialModule} from './other-modules/material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MarkdownModule} from 'ngx-markdown';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ComponentCardComponent } from './components/component-card/component-card.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MainDashboardComponent,
    ComponentCardComponent,
    SummaryCardComponent,
    SearchboxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
