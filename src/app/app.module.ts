import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoundownTimerModule } from './countdown-timer/countdown-timer.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, CoundownTimerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
