import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName = "";
  currMembers: string[] = [];
  errorMessage = "";
  numberOfTeams: number | "" = "";
  teams: string[][] = [];
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty.";
      return;
    }
    this.errorMessage = "";
    this.currMembers.push(this.newMemberName);
    this.newMemberName = "";
  }
  onInput(member:string) {
    this.newMemberName = member;
  }
  onNumberOfTeamsInput(value:string) {
    this.numberOfTeams = Number(value);
  }
  generateTeams() {
    console.log('hit')
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid number of teams.";
      return;
    }
    if(this.currMembers.length < this.numberOfTeams) {
      this.errorMessage = "Not enough members.";
      return;
    }
    this.errorMessage = '';
    const allMembers = [...this.currMembers];
    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const rand = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(rand, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.currMembers = [];
    this.numberOfTeams = "";
  }
}
