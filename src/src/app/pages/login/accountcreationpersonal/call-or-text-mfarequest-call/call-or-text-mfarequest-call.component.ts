import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-call-or-text-mfarequest-call',
  templateUrl: './call-or-text-mfarequest-call.component.html',
  styleUrls: ['./call-or-text-mfarequest-call.component.scss']
})
export class CallOrTextMFARequestCallComponent implements OnInit {
  mfaRequestCall: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mfaRequestCall = this.fb.group({
     
      'callRequest': ['', [Validators.required ,Validators.pattern('[a-zA-Z0-9]{6}') ]]
      });
  }

  save(){
  	
  }

}