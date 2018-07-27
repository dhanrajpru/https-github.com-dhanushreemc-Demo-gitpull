import { Component, OnInit } from '@angular/core';
import { GlobalContent } from '../../../../app.globalcontent';
import { GlobalHelper } from '../../../../app.globalhelper';
import { Routes, Router, RouterModule } from '@angular/router';
import { LocalStorageService } from 'ngx-store';
import { UserAccountService } from '../../../../services/user/user-account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
	dialog: FormGroup;
	agreeDisabled:boolean;
	constructor(private fb: FormBuilder,
		private globalContent: GlobalContent,
		private router: Router,
		private globalHelper: GlobalHelper,
		private localStorage: LocalStorageService,
		private accountService:UserAccountService
		) { 
	}

	ngOnInit() {
		this.agreeDisabled = true;
		this.dialog = this.fb.group({
			'accept': ['', Validators.required]
		})
	}

	termsAgreement(){
		if(this.dialog.value.accept){
			this.localStorage.set('aggreedStatement',true);
			this.localStorage.set('mfa_verified',false);
			this.agreeDisabled = false;
		}
		else{
			this.localStorage.set('aggreedStatement',false);
			this.agreeDisabled = true;
		}
	}

	createAccount(): void {

		let serviceData = {
			userId : this.localStorage.get('accn_personal_ref'),
			data : {
				elegibilityForRestrictedItemsFlag: true
			}
		};

		this.accountService.updateAccount(serviceData).subscribe(data=>{
			if(data.status){
				
				this.localStorage.set('rd_wallet_address', '');
				this.localStorage.set('email_address', '');
				this.localStorage.set('mfa_verified', false);
				this.localStorage.set('aggreedStatement',true);
				this.router.navigate(['/accountpage']);
			}
			
		});
	}
}
