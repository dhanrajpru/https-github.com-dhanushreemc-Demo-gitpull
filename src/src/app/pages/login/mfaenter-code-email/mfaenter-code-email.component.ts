import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-mfaenter-code-email',
  templateUrl: './mfaenter-code-email.component.html',
  styleUrls: ['./mfaenter-code-email.component.scss']
})
export class MFAEnterCodeEmailComponent implements OnInit {
  mfaCodeEmail: FormGroup;
  hidePassword: boolean;
  hidePasswordIcon: string;
  constructor(private fb: FormBuilder) {
    this.hidePassword = true;
    this.hidePasswordIcon = "fa fa-eye-slash";
  }

  ngOnInit() {
    this.mfaCodeEmail = this.fb.group({
      'tempIdentifCode': ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      'password': ['', [Validators.required]]
    });
  }
  passwordVisibility() {

    if (this.hidePassword) {
      this.hidePassword = false;
      this.hidePasswordIcon = "fa fa-eye";
    } else {
      this.hidePassword = true;
      this.hidePasswordIcon = "fa fa-eye-slash";
    }
  }
}
