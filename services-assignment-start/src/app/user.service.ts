import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  userChanged = new EventEmitter<any>();

  constructor() {
  }

  activeToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.userChanged.emit();
  }

  inactiveToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.userChanged.emit();
  }
}

