import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName = "";
  currMembers: string[] = [];
  addMember() {
    this.currMembers.push(this.newMemberName);
    this.newMemberName = "";
  }
  onInput(member:string) {
    this.newMemberName = member;
  }
}
