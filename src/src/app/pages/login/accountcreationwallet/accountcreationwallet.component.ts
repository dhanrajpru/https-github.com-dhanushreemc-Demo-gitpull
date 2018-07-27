import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';
import { UserAccountService } from '../../../services/user/user-account.service';
@Component({
	selector: 'app-accountcreationwallet',
	templateUrl: './accountcreationwallet.component.html',
	styleUrls: ['./accountcreationwallet.component.scss']
})
export class AccountcreationwalletComponent implements OnInit {

	rdwalletaddress: FormGroup;
	constructor(
		private router: Router,
		private localStorageService: LocalStorageService,
		private fb: FormBuilder,
		private accountService: UserAccountService) { }

	ngOnInit() {
		this.rdwalletaddress = this.fb.group({
			'address': ['', [Validators.required]],
		});
		this.load();
	}

	save(): void {
		this.setInfoInLocalStrorage();
		let serviceData = {
			userId : this.localStorageService.get('accn_personal_ref'),
			data : {
				zervPublicKey: this.localStorageService.get('rd_wallet_address')
			}
		};

		this.accountService.updateAccount(serviceData).subscribe(data=>{
			this.router.navigate(['/accountcreationoverview']);
		});
		
	}

	back(): void {
		this.router.navigate(['/accountcreationpersonal']);
	}

	load(): void {
		this.loadFromLocalStrorage();
	}

	setInfoInLocalStrorage(): boolean {
		this.localStorageService.set('rd_wallet_address', this.rdwalletaddress.value.address);
		return true;
	}

	loadFromLocalStrorage(): boolean {
		let info = this.localStorageService.get('rd_wallet_address');

		if (typeof info == "string" && info != "") {
			this.rdwalletaddress.patchValue({ "address": info });
			return true;
		} else {
			return false;
		}
	}
}
