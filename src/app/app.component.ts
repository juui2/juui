import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'juui!';
  public direction = "row";
  toggleDirection() {
    this.direction = (this.direction === "column") ? "row" : "column";
  }
}
