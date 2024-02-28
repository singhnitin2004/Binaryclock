import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Data, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgFor, NgClass, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'binary-clock';
  currentTime: Date = new Date()
  binaryHourArray: string[] = [];
  binaryMinuteArray: string[] = [];
  binarySecondsArray: string[] = [];
  binaryMillisecondsArray: string[] = [];

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
      this.updateHour();
      this.updateMinute();
      this.updateSecond();
      this.updateMillisecond();
    }, 1);
  }

  updateTime(): void {
    this.currentTime = new Date();
  }

  updateHour(): void {
    const currentHour = new Date().getHours();
    const binaryHour = this.decimalToBinary(currentHour);
    this.binaryHourArray = binaryHour.split('');
  }

  updateMinute(): void {
    const currentMinutes = new Date().getMinutes();
    const binaryMinute = this.decimalToBinary(currentMinutes);
    this.binaryMinuteArray = binaryMinute.split('');
  }

  updateSecond(): void {
    const currentseconds = new Date().getSeconds();
    const binarySeconds = this.decimalToBinary(currentseconds);
    this.binarySecondsArray = binarySeconds.split('');
  }

  updateMillisecond(): void {
    const millisecond = new Date().getMilliseconds();
    const binaryMilliseconds = this.decimalToBinary(millisecond);
    this.binaryMillisecondsArray = binaryMilliseconds.split('');
  }

  decimalToBinary(decimal: number): string {
    return decimal.toString(2).padStart(10, '0');
  }

}
