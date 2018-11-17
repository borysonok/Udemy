import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public members = [];

  public addCountMember(eventNumber) {
    console.log("====== event umber is:", eventNumber);
    this.members.push(eventNumber);
  }
}
