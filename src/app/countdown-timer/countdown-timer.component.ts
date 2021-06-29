import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  countDownStart!: boolean;
  hours!: number;
  minutes!: number;
  seconds!: number;
  countDownEnd!: boolean;

  private audioContent!: HTMLAudioElement;

  constructor(private ele: ElementRef) {
    this.minutes = 0;
    this.seconds = 0;
  }

  ngOnInit(): void {
    this.hours = 0;
  }

  onSetTimer(event: Record<string, number>): void {
    this.hours = event.hours;
    this.minutes = event.minutes;
    this.seconds = event.seconds;
    this.countDownStart = true;
  }

  onTimerDone(event: string): void {
    if (event === 'done') {
      this._notifyUser();
    }
  }

  private _notifyUser(): void {
    this.countDownEnd = true;
    this.audioContent = this.ele.nativeElement.querySelector('#audioTag');
    if (this.audioContent && this.audioContent.play) {
      this.audioContent.play();
    } else {
      this.audioContent = new Audio('../assets/alarm.mp3');
      this.audioContent.play();
    }
  }

  startNewTimer(): void {
    this.resetTimer();
    this.countDownStart = false;
    this.countDownEnd = false;
    if (this.audioContent) {
      this.audioContent.pause();
      this.audioContent.currentTime = 0;
    }
  }

  resetTimer(): void {
    this.countDownStart = false;
  }

}
