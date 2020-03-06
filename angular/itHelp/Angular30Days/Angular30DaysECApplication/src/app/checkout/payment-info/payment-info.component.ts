import { Component, OnInit } from '@angular/core';

import { appPath } from '../../app-path.const';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  public path = appPath;
  constructor() { }

  ngOnInit() {
  }

}
