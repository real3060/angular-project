import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secret = 'secret password  = tuna';
  displayingP = false;
  countButton = 0;
  currentValue = '';
  registryLog = ['first registry'];

  counterButton() {
    this.displayingP = !this.displayingP;
    if (this.displayingP) {
      this.countButton++;
      this.registryLog.push(this.currentValue);
    }
  }
}
