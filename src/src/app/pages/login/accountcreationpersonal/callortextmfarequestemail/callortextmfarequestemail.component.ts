import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Routes, Router, RouterModule } from '@angular/router';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';
import { UserAccountService } from '../../../../services/user/user-account.service';
@Component({
  selector: 'app-callortextmfarequestemail',
  templateUrl: './callortextmfarequestemail.component.html',
  styleUrls: ['./callortextmfarequestemail.component.scss']
})
export class CallortextmfarequestemailComponent implements OnInit {
  mfaRequestEmail: FormGroup;
  customerEmail: string;
  constructor(private fb: FormBuilder,private router:Router,private ls:LocalStorageService,private mfa:UserAccountService) { }

  ngOnInit() {
    this.mfaRequestEmail = this.fb.group({
     
      'tempCode': ['', [Validators.required ,Validators.pattern('[a-zA-Z0-9]{5}') ]]
      });

    this.customerEmail = this.ls.get('email_address');
  }

  back(){
     this.router.navigate(['/accountcreationpersonal']);
  }

  verify(){

      let info = {
          "email":this.customerEmail,
          "code": this.mfaRequestEmail.value.tempCode
        };

      this.mfa.mfaVerify(info).subscribe(data =>{
        if(data.status){
          this.ls.set('mfa_verified',true);
          this.router.navigate(['/accountcreationwallet']);
        }
      }, err=>{

      });
  }
}
