import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';
import { UserAccountService } from '../../../services/user/user-account.service';
import { GlobalContent } from '../../../app.globalcontent';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Routes, Router, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { GlobalHelper } from '../../../app.globalhelper';

@Component({
	selector: 'app-accountcreationoverview',
	templateUrl: './accountcreationoverview.component.html',
	styleUrls: ['./accountcreationoverview.component.scss']
})
export class AccountcreationoverviewComponent implements OnInit {
	
	
	accInfo: Object;

	constructor(private fb: FormBuilder,
		public dialog: MatDialog,
		private localStorageService: LocalStorageService,
		private sessionStorageService: SessionStorageService,
		private cookiesStorageService: CookiesStorageService,
		private sharedStorageService: SharedStorageService,
		private globalContent: GlobalContent,
		private router: Router,
		private globalHelper: GlobalHelper,
		private service:UserAccountService) { }

	ngOnInit() {
		this.accInfo = {
			'emailAddress': "",
			'username': "",
			'firstName': "",
			'lastName': "",
			'birthDay': "",
			'birthMonth': "",
			'birthYear': "",
			'countryCode': "",
			'areaCode': "",
			'zipCode': "",
			'phoneNumber': "",
			'address1': "",
			'address2': "",
			'country': "",
			'state': "",
			'city': "",
			'sAddressOne': "",
			'sAddressTwo': "",
			'countryTwo': "",
			'zipCodeTwo': "",
			'cityTwo': "",
			'stateTwo': "",
			'walletAddress' : ""
		};
		this.localStorageService.set('aggreedStatement', false);
		this.load();
	}

	back(): void {
		this.router.navigate(['/accountcreationwallet']);
	}

	showEligibilityModal() {
		let eligiblityModal = document.getElementById("elgibilityModal");
		eligiblityModal.style.display = "block";
		console.log("here");
	}

	load(): void {
		this.populateAccountInfo();
	}

	
	next() {
		this.router.navigate(['/dialog']);
	}

	openDialog(): void {

		let dialogRef = this.dialog.open(DialogComponent, {
		  height: '450px',
		  width: '600px',
		});

		dialogRef.afterClosed().subscribe(result => {
			if(this.localStorageService.get('aggreedStatement')){
				
				this.localStorageService.set('accn_personal_ref',"");
				this.localStorageService.set('rd_wallet_address','');
				this.localStorageService.set('aggreedStatement',false);
				this.router.navigate(['/accountpage']);		
			}
   		});
	}

	populateAccountInfo() {
		let ref = this.localStorageService.get('accn_personal_ref');

		if (typeof ref != "undefined" && ref != null && ref != ""){
			let serviceInput = {params:{ref: ref }};
			this.service.retriveAccount(serviceInput).subscribe(res => {
				this.castServiceResponse(res.userInfo);
			});
		}
		
	}

	castServiceResponse(input){

		this.accInfo = {
			'emailAddress': input.emailAddress,
			'username': input.username,
			'firstName': input.firstName,
			'lastName': input.lastName,
			'birthDay': input.dateOfBirth.day,
			'birthMonth': input.dateOfBirth.month,
			'birthYear': input.dateOfBirth.year,
			'countryCode': input.countryCode,
			'areaCode': input.areaCode,
			'zipCode': input.officeZipCode,
			'phoneNumber': input.phoneNumber,
			'address1': input.officeAddress1,
			'address2': input.officeAddress2,
			'country': input.officeCountry,
			'state': input.officeState,
			'city': input.officeCity,
			'sAddressOne': input.shippingAddress1,
			'sAddressTwo': input.shippingAddress2,
			'countryTwo': input.shippingCountry,
			'zipCodeTwo': input.shippingZipCode,
			'cityTwo': input.shippingCity,
			'stateTwo': input.shippingState,
			'walletAddress' : input.walletAddress
		};
		
	}

}