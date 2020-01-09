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
  paragraphDisableState:boolean = false;
  displayState:string = 'block';
  toggleParagraphCount:number = 0;

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
    return;
  }

  toggleParagraphDisableState(){
    this.paragraphDisableState = !this.paragraphDisableState;
    this.displayState = this.getParagraphDisableState();
    this.toggleParagraphCount++;
  }

  getParagraphDisableState(){
    if(this.paragraphDisableState){
      return 'block';
    }else {
      return 'none';
    }
  }
}
