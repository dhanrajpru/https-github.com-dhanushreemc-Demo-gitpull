import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-mfaenter-code-phone-call',
  templateUrl: './mfaenter-code-phone-call.component.html',
  styleUrls: ['./mfaenter-code-phone-call.component.scss']
})
export class MFAEnterCodePhoneCallComponent implements OnInit {
  mfaEnterPhoneCall: FormGroup;
  hidePassword: boolean;
  hidePasswordIcon: string;
  constructor(private fb: FormBuilder) { 
    this.hidePassword = true;
		this.hidePasswordIcon = "fa fa-eye-slash";
  }

  ngOnInit() {
    this.mfaEnterPhoneCall = this.fb.group({
      'temporaryIdentificationCode': ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
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
