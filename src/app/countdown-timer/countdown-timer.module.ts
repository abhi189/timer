import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CountdownTimerComponent } from './countdown-timer.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormComponent } from './components/form/form.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';

@NgModule({
  declarations: [CountdownTimerComponent, TimerComponent, FormComponent, DialogComponent],
  imports: [BrowserModule, FormsModule, CountdownTimerRoutingModule],
  providers: [],
})
export class CoundownTimerModule {}
