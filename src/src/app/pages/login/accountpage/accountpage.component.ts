import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.scss']
})
export class AccountpageComponent implements OnInit {
  accountPage: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.accountPage = this.fb.group({
      'account': ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
    });
  }
}
