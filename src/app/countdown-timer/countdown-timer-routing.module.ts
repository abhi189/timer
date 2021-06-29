import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownTimerComponent } from './countdown-timer.component';

const routes: Routes = [
  {
    path: 'timer',
    component: CountdownTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CountdownTimerRoutingModule {}
