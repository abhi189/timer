import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'countdown-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() setTimer = new EventEmitter();

  submittingForm = false;
  formError = false;

  setCoundown(form: NgForm): void {
    this.submittingForm = true;
    this.formError = false;
    if (!form.valid || (!form.controls.hours.touched &&
        !form.controls.minutes.touched &&
        !form.controls.seconds.touched)) {
      this.formError = true;
      return;
    }
    if (form.value.hours < 0 ||
        form.value.minutes < 0 || form.value.minutes > 59 ||
        form.value.seconds < 0 || form.value.seconds > 59) {
      this.formError = true;
      return;
    }
    this.setTimer.next({
      hours: form.value.hours,
      minutes: form.value.minutes,
      seconds: form.value.seconds,
    });
  }

  clearTimer(form: NgForm): void {
    form.resetForm();
  }

}
