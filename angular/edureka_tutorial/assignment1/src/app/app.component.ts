import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  ServerName: string = 'Apollo';
  ServerPid: number = 11;
  ServerStatus: string = 'offline';
  statusFlag: boolean = false;
  buttonState: boolean = true;

  constructor () {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }
  
  toggleServerStatus () {
    this.statusFlag = !this.statusFlag;
    if(this.statusFlag === true){
      this.ServerStatus = 'online';
    }else{
      this.ServerStatus = 'offline';
    }
  }
}
