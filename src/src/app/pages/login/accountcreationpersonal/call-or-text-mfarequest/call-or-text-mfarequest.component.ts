import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Routes, Router, RouterModule } from '@angular/router';
import { UserAccountService } from '../../../../services/user/user-account.service';
import { LocalStorageService } from 'ngx-store';

@Component({
  selector: 'app-call-or-text-mfarequest',
  templateUrl: './call-or-text-mfarequest.component.html',
  styleUrls: ['./call-or-text-mfarequest.component.scss']
})
export class CallOrTextMFARequestComponent implements OnInit {
  mfaRequest: FormGroup;
  emailAddress;
  constructor(private fb: FormBuilder,private router: Router, private mfa: UserAccountService, private ls:LocalStorageService) { }

  ngOnInit() {
    this.mfaRequest = this.fb.group({
      'phone': ['', Validators.required]
    })

    this.emailAddress = this.ls.get('email_address');
  }

  
  back(){
    this.router.navigate(['/accountcreationpersonal']);
  }

  send(){
      this.ls.set('mfa_verified',false);
      let info = {
          "authType":"email",
          "authValue": this.emailAddress
        };

      this.mfa.mfaSend(info).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/callortextmfarequestemail']);
      }, err=>{

      });
      
  }



}