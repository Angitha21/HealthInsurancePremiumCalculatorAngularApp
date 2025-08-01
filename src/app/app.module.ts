import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremiumCalculatorComponent } from './components/premium-calculator/premium-calculator.component';
import { PremiumSummaryComponent } from './components/premium-summary/premium-summary.component';
import { JwtInterceptor } from './services/http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PremiumCalculatorComponent,
    PremiumSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
