import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .fiveOrMore {
    color: white;
  }`]
})
export class AppComponent {
  secretuncovered = false;
  clicks = [];

  onClick() {
    this.clicks.push(new Date().toLocaleTimeString());
    this.secretuncovered = !this.secretuncovered;
  }

  onParagraphCreation(click) {
    return this.clicks.indexOf(click) >= 4 ? 'blue' : 'white';
  }
}
