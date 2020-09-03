import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() fireEvent = new EventEmitter<number>();
  interval;
  count = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.fireEvent.emit(this.count);
      this.count++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
