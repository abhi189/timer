import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { Timer } from '../../models/timer.model';

@Component({
  selector: 'countdown-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() hours = 0;
  @Input() minutes = 0;
  @Input() seconds = 0;
  @Output() notifyUser = new EventEmitter();
  @Output() resetCountDown = new EventEmitter();

  countdownHours!: string;
  countdownMinutes!: string;
  countdownSeconds!: string;
  countdownTime: Timer = {
    date: '',
    time: ''
  };

  countdownEnd!: boolean;
  private timerObservable!: Observable<number>;

  ngOnInit(): void {
    this._setCountdownTimer(this.hours, this.minutes, this.seconds);
  }

  private _getDate(date?: Date): Date {
    return date ? new Date(date) : new Date();
  }

  private _setCountdownTimer(hrs: number = 0, mins: number = 0, secs: number = 0): void {
    const currentTime: Date = this._getDate();
    const currentInputTime: Date = this._getDate();
    currentInputTime.setHours(currentInputTime.getHours() + hrs);
    currentInputTime.setMinutes(currentInputTime.getMinutes() + mins);
    currentInputTime.setSeconds(currentInputTime.getSeconds() + secs);

    this.countdownTime.date = this._getDate(currentInputTime).toDateString();
    this.countdownTime.time = this._getDate(currentInputTime).toLocaleTimeString();
    let timeDiff = Math.abs(+currentInputTime - +currentTime);
    timeDiff = timeDiff / 1000;
    const that = this;

    timer(0, 1000).pipe(take(timeDiff))
      .pipe(map(() => {
        timeDiff = timeDiff - 1;
        return timeDiff;
      }))
      .subscribe((res: number) => {
        if (res === 0) {
          this.notifyUser.next('done');
        } else {
          that._showCountdown(res);
        }
      });
  }

  private _showCountdown(time: number): void {
    this.countdownHours = this._calHours(time);
    this.countdownMinutes = this._calMinutes(time);
    this.countdownSeconds = this._calSeconds(time);
  }

  private _calSeconds(ticks: number): string {
    return this._pad(Math.floor(ticks % 60));
  }

  private _calMinutes(ticks: number): string {
    return this._pad((Math.floor(ticks / 60)) % 60);
  }

  private _calHours(ticks: number): string {
    return this._pad(Math.floor(((ticks / 60) / 60) % 60));
  }

  private _pad(digit: number): string {
    const fDigit = digit <= 9 ? '0' + digit : digit;

    return fDigit as string;
  }

  resetTimer(): void {
    this.resetCountDown.next('reset');
  }
}
