import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  increaseCounter(count: number) {
    return ++count;
  }
}
