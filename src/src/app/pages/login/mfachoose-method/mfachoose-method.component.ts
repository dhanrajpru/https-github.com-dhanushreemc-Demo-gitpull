import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-mfachoose-method',
  templateUrl: './mfachoose-method.component.html',
  styleUrls: ['./mfachoose-method.component.scss']
})
export class MFAChooseMethodComponent implements OnInit {
  mfaChooseMethod: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mfaChooseMethod = this.fb.group({
      'phone': ['', Validators.required]
    })
  }
}
