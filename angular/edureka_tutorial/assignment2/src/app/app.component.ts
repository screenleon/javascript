import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  name: string = "";

  resetNameButtonState: boolean = false;

  resetName() {
    this.name = "";
  }

  checkName(){
    if(this.name === ""){
      this.resetNameButtonState = true;
      return this.resetNameButtonState;
    }
    
  }

}
