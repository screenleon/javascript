import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // selector: '[app-header]'  can use at <div app-header></div>
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
