import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent implements OnInit {
  email: string = "Johndoe@gmail.com";
  number: number = 9885149438;
  password: string = "doe";
  constructor() { }

  ngOnInit() {
  }

}
