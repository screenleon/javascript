import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'First-App';
  flag: boolean = true;

  studentRoster = ['Arya', 'Lien', 'Rick'];
  currentName = '';

  toggleFlag(){
    this.flag = !this.flag;
  }

  getColor() {
    if(this.flag === true){
      return 'green';
    }else {
      return 'purple';
    }
  }

  add() {
    this.studentRoster.push(this.currentName);
    this.currentName = "";
  }
}
