import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
 shipping: string = "111 S Wacker Dr Chicago IL 60606 USA";
  constructor() { }

  ngOnInit() {
  }

}
