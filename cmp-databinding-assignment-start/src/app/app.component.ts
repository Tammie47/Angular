import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() odds: number[] = [];
  @Input() evens: number[] = [];


  onEventFired(counter: number) {
    if (counter % 2 === 0) {
      this.evens.push(counter);
    } else {
      this.odds.push(counter);
    }
  }
}
