import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'countdown-notify',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Output() startCountDown = new EventEmitter();

  startNewTimer(): void {
    this.startCountDown.next();
  }
}
