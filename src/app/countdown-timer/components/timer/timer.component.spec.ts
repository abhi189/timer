import { TestBed } from '@angular/core/testing';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  it('should render title', () => {
    const fixture = TestBed.createComponent(TimerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.timer-container')).toBeTruthy();
  });
});
