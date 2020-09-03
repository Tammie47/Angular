import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serviceUsageCount = 0;

  constructor(private userService: UserService, private countService: CounterService) {
    this.userService.userChanged.subscribe(() => {
      const count = this.countService.increaseCounter(this.serviceUsageCount);
      this.serviceUsageCount = count;
    });
  }


}
