import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-mfaenter-code-phone-text',
  templateUrl: './mfaenter-code-phone-text.component.html',
  styleUrls: ['./mfaenter-code-phone-text.component.scss']
})
export class MFAEnterCodePhoneTextComponent implements OnInit {
  mfaEnterPhoneText: FormGroup;
  hidePassword: boolean;
  hidePasswordIcon: string;
  constructor(private fb: FormBuilder) {
    this.hidePassword = true;
		this.hidePasswordIcon = "fa fa-eye-slash";
   }

  ngOnInit() {
    this.mfaEnterPhoneText = this.fb.group({
      'code': ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      'pass': ['', [Validators.required]]
      
    });
  }
  passwordVisibility(){
		if(this.hidePassword){
		  this.hidePassword = false;
		  this.hidePasswordIcon = "fa fa-eye";
		}
		else{
		  this.hidePassword = true;
		  this.hidePasswordIcon = "fa fa-eye-slash";
		}
	  }
}
