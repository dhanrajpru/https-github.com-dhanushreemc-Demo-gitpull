import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-call-or-text-mfarequest-text',
  templateUrl: './call-or-text-mfarequest-text.component.html',
  styleUrls: ['./call-or-text-mfarequest-text.component.scss']
})
export class CallOrTextMFARequestTextComponent implements OnInit {
  mfaRequestText: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mfaRequestText = this.fb.group({
     
      'tempIdCode': ['', [Validators.required ,Validators.pattern('[a-zA-Z0-9]{6}') ]]
      });
  }

}