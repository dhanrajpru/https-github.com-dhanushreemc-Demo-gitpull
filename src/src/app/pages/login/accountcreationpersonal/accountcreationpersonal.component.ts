import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, of, ObservableInput } from 'rxjs';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService } from 'ngx-store';
import { GlobalContent } from '../../../app.globalcontent';
import { GlobalHelper } from '../../../app.globalhelper';
import { Routes, Router, RouterModule } from '@angular/router';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { UserAccountService } from '../../../services/user/user-account.service';
@Component({
	selector: 'app-accountcreationpersonal',
	templateUrl: './accountcreationpersonal.component.html',
	styleUrls: ['./accountcreationpersonal.component.scss']
})
export class AccountcreationpersonalComponent implements OnInit {

	accountCreationPersonal: FormGroup;
	accountCreationPersonalMessage;
	countries;
	countriesTwo;
	states;
	statesTwo;
	allCountryStates;
	allCountryStatesTwo;
	countrySelected: boolean;
	stateSelected: boolean;
	countrySelectedTwo: boolean;
	stateSelectedTwo: boolean;
	hidePassword: boolean;
	hidePasswordIcon: string;
	shippingAdd: boolean;
	address1: boolean;
	country: boolean;
	state: boolean;
	city: boolean;
	zipCode: boolean;
	passwordStrength: string;

	myOptions: INgxMyDpOptions = {
		// other options...
		dateFormat: 'mm.dd.yyyy',
	};
	constructor(
		private fb: FormBuilder,
		private localStorageService: LocalStorageService,
		private sessionStorageService: SessionStorageService,
		private cookiesStorageService: CookiesStorageService,
		private sharedStorageService: SharedStorageService,
		private router: Router,
		private globalContent: GlobalContent,
		private globalHelper: GlobalHelper,
		private service: UserAccountService) {

			
	}

	ngOnInit() {
		
		this.countrySelected = false;
		this.stateSelected = true;
		this.countrySelectedTwo = false;
		this.stateSelectedTwo = true;
		this.accountCreationPersonalMessage = '';
		this.hidePassword = true;
		this.hidePasswordIcon = "fa fa-eye-slash";
		this.countries = this.globalContent.countries;
		this.allCountryStates = this.globalContent.states;
		this.countriesTwo = this.globalContent.countries;
		this.allCountryStatesTwo = this.globalContent.states;
		this.accountCreationPersonal = this.fb.group({
			'emailAddress': ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+?\.[a-zA-Z]{2,6}$')]],
			'password': ['', [Validators.required, Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{7,20})$')]],
			'username': ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-z0-9]{4}[a-z0-9]*$')]],
			'firstName': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
			'lastName': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
			'dob': ['', [Validators.required]],
			'countryCode': ['', [Validators.required]],
			'zipCode': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]*')]],
			'phoneNumber': ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
			'addressOne': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
			'country': ['', [Validators.required]],
			'addressTwo': [''],
			'state': [{ value: '', disabled: true }, [Validators.required]],
			'city': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
			'isShippingAddress': ['Yes'],
			'sAddressOne': [''],
			'sAddressTwo': [''],
			'countryTwo': [''],
			'zipCodeTwo': [''],
			'cityTwo': [''],
			'stateTwo': [{ value: '', disabled: true }]
		});

		let formData = this.accountCreationPersonal.value;
	

		this.populateAccountInfo();
		
	}

	addressShow(from) {
		this.shippingAdd = true;

		if(from == "firstload"){
			this.accountCreationPersonal.controls.stateTwo.disable();
			if (this.accountCreationPersonal.value.address == this.accountCreationPersonal.value.address1){
				this.accountCreationPersonal.get('sAddressOne').patchValue('');
				this.accountCreationPersonal.get('sAddressTwo').patchValue('');
				this.accountCreationPersonal.get('countryTwo').patchValue('');
				this.accountCreationPersonal.get('zipCodeTwo').patchValue('');
				this.accountCreationPersonal.get('cityTwo').patchValue('');
				this.accountCreationPersonal.get('stateTwo').patchValue('');
			}
	
			this.accountCreationPersonal.get('sAddressOne').setValidators([Validators.required]);
			this.accountCreationPersonal.get('countryTwo').setValidators([Validators.required]);
			this.accountCreationPersonal.get('zipCodeTwo').setValidators([Validators.required]);
			this.accountCreationPersonal.get('cityTwo').setValidators([Validators.required]);
			this.accountCreationPersonal.get('stateTwo').setValidators([Validators.required]);

			this.accountCreationPersonal.get('sAddressOne').updateValueAndValidity();
			this.accountCreationPersonal.get('countryTwo').updateValueAndValidity();
			this.accountCreationPersonal.get('zipCodeTwo').updateValueAndValidity();
			this.accountCreationPersonal.get('cityTwo').updateValueAndValidity();
			this.accountCreationPersonal.get('stateTwo').updateValueAndValidity();
		}
		
	}

	addressHide() {

		/* 
		 * isShippingAddress = 'Yes'
		 * Shipping address is same as residence/office address.
		 * hence copying the residence/office address to shipping address.
		 */

		this.shippingAdd = false;
		this.accountCreationPersonal.patchValue({
			'sAddressOne': this.accountCreationPersonal.value.addressOne,
			'countryTwo': this.accountCreationPersonal.value.country,
			'zipCodeTwo': this.accountCreationPersonal.value.zipCode,
			'cityTwo': this.accountCreationPersonal.value.city,
			'stateTwo': this.accountCreationPersonal.value.state
		});
	}

	countrySelect(selectedVal) {
		if (selectedVal != "" && (selectedVal == 0 || selectedVal > 0)) {
			this.countrySelected = true;
			let selectedCountryIndex = parseInt(selectedVal) + 1;
			let stateStr = this.allCountryStates[selectedCountryIndex];
			this.states = stateStr.split('|');
			this.stateSelected = false;
			this.accountCreationPersonal.controls.state.enable();
		} else {
			this.states = [];
			this.stateSelected = true;
			this.accountCreationPersonal.controls.state.disable()
		}
	}


	countrySelectTwo(selectedVal) {
		if (selectedVal != "" && (selectedVal == 0 || selectedVal > 0)) {
			this.countrySelectedTwo = true;
			let selectedCountryIndexTwo = parseInt(selectedVal) + 1;
			let stateStrTwo = this.allCountryStatesTwo[selectedCountryIndexTwo];
			this.statesTwo = stateStrTwo.split('|');
			this.stateSelectedTwo = false;
			this.accountCreationPersonal.controls.stateTwo.enable();
		} else {
			this.statesTwo = [];
			this.stateSelectedTwo = true;
			this.accountCreationPersonal.controls.stateTwo.disable()
		}
	}


	populateAccountInfo() {
		let ref = this.localStorageService.get('accn_personal_ref');

		if (typeof ref != "undefined" && ref != null && ref != ""){
			let serviceInput = {params:{ref: ref }};
			this.service.retriveAccount(serviceInput).subscribe(res => {
				let formData = this.castServiceResponse(res.userInfo);

				if(formData.addressOne != formData.sAddressOne){
					this.accountCreationPersonal.patchValue({"isShippingAddress":'No'});
					this.addressShow('');
				}	

				this.accountCreationPersonal.patchValue({"country":formData.country, "countryTwo":formData.countryTwo});

				this.loadCountriesStates();
				this.loadShippingCountriesStates();

				this.accountCreationPersonal.patchValue(formData);
			});
		}
		else{
			this.loadCountriesStates();
			this.loadShippingCountriesStates();
		}
	}

	save(): void {
		if (this.accountCreationPersonal.value.isShippingAddress == 'Yes') {
			let info = {
				"stateTwo": this.accountCreationPersonal.value.state,
				"countryTwo": this.accountCreationPersonal.value.country,
				"zipCodeTwo": this.accountCreationPersonal.value.zipCode,
				"sAddressOne": this.accountCreationPersonal.value.addressOne,
				"cityTwo": this.accountCreationPersonal.value.city,
			};
			this.accountCreationPersonal.patchValue(info);
		}
		
		let payload = this.prepareServicePayload(this.accountCreationPersonal.value);
		let ref = this.localStorageService.get('accn_personal_ref');
		this.localStorageService.set('email_address', this.accountCreationPersonal.value.emailAddress);
		if (typeof ref != "undefined" && ref != null && ref != ""){
			let requestPayload = {
				userId : ref,
				data : payload
			};
			this.service.updateAccount(requestPayload).subscribe(res => {
				if(res.status){
					this.saveCallback(res);
				}
			});
		}
		else{
			this.service.createAccount(payload).subscribe(res => {
				if(res.status){
					this.localStorageService.set('accn_personal_ref', res.data.ref);
					this.saveCallback(res);
				}
			});
		} 

	}

	saveCallback(res){
		if(res.status){
			let mfaVerified = this.localStorageService.get('mfa_verified');
			if(mfaVerified == null || !mfaVerified ){
				this.router.navigate(['/callOrTextMFARequest']);
			}
			else if(mfaVerified){
				this.router.navigate(['/accountcreationwallet']);
			}
			else{
				this.router.navigate(['/callOrTextMFARequest']);	
			}	
		}
	}

	back(): void {
		this.router.navigate(['/login']);
	}

	loadCountriesStates(): void {
		let countryVal = this.accountCreationPersonal.value.country;
		if (countryVal != "" && (countryVal == 0 || countryVal > 0)) {
			this.countrySelected = true;
			let selectedCountryIndex = parseInt(countryVal) + 1;
			let stateStr = this.allCountryStates[selectedCountryIndex];
			this.states = stateStr.split('|');
			this.stateSelected = false;
			this.accountCreationPersonal.controls.state.enable();
		}
	}

	loadShippingCountriesStates(): void {
		let countryVal = this.accountCreationPersonal.value.countryTwo;
		if (countryVal != "" && (countryVal == 0 || countryVal > 0)) {
			this.countrySelectedTwo = true;
			let selectedCountryIndexTwo = parseInt(countryVal) + 1;
			let stateStrTwo = this.allCountryStatesTwo[selectedCountryIndexTwo];
			this.statesTwo = stateStrTwo.split('|');
			this.stateSelectedTwo = false;
			this.accountCreationPersonal.controls.stateTwo.enable();
		}
	}

	prepareServicePayload(personalInfo){
		let stateCountry = this.globalHelper.castStateAndCountry(this.globalContent.countries, this.globalContent.states, personalInfo.country, personalInfo.state);
		let selectedCountry = stateCountry.country;
		let selectedState = stateCountry.state;

		let selectedShippingCountry = stateCountry.country;
		let selectedShippingState = stateCountry.state;


		if (personalInfo.isShippingAddress == 'No'){
			let stateCountryTwo = this.globalHelper.castStateAndCountry(this.globalContent.countries, this.globalContent.states, personalInfo.countryTwo, personalInfo.stateTwo);
			selectedShippingCountry = stateCountryTwo.country;
			selectedShippingState = stateCountryTwo.state;
		}

		let dobarr = this.accountCreationPersonal.value.dob.formatted.split('.');
		let servicePayload = {
			"emailAddress": personalInfo.emailAddress,
			"password": personalInfo.password,
			"firstName": personalInfo.firstName,
			"lastName": personalInfo.lastName,
			"username": personalInfo.username,
			"dateOfBirth": dobarr[2] + '-' + dobarr[0] + '-' + dobarr[1],
			"companyName": "hashcode technologies",
			"officeAddress1": personalInfo.addressOne,
			"officeAddress2": personalInfo.addressTwo,
			"officeState": selectedState,
			"officeCity": personalInfo.city,
			"officeZipCode": personalInfo.zipCode,
			"officeCountry": selectedCountry,
			"shippingAddress1": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.addressOne : personalInfo.sAddressOne,
			"shippingAddress2": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.addressTwo : personalInfo.sAddressTwo,
			"shippingCity": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.city : personalInfo.cityTwo,
			"shippingState": selectedShippingState,
			"shippingZipCode": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.zipCode : personalInfo.zipCodeTwo,
			"shippingCountry": selectedShippingCountry,
			"phoneNumber": personalInfo.phoneNumber,
			"countryCode": personalInfo.countryCode,
			"zervPublicKey": '',
			"shippingAddressValidationFlag": true,
			"elegibilityForRestrictedItemsFlag": false
		};
		return servicePayload;
	}

	castServiceResponse(input){
		let countryState = this.globalHelper.recastStateAndCountry(this.globalContent.countries, this.globalContent.states, input.officeCountry, input.officeState);
		let shippingCountryState = this.globalHelper.recastStateAndCountry(this.globalContent.countries, this.globalContent.states, input.shippingCountry, input.shippingState);

		let dob = input.dateOfBirth.year +'-'+ input.dateOfBirth.month +'-'+input.dateOfBirth.day;
		let epoch = new Date(dob).getTime();
		return {
			'emailAddress': input.emailAddress,
			'password': '',
			'username': input.username,
			'firstName': input.firstName,
			'lastName': input.lastName,
			'dob': epoch,
			'countryCode': input.countryCode,
			'areaCode': input.areaCode,
			'zipCode': input.officeZipCode,
			'phoneNumber': input.phoneNumber,
			'addressOne': input.officeAddress1,
			'addressTwo': input.officeAddress2,
			'country': countryState.countryId,
			'state': countryState.stateId,
			'city': input.officeCity,
			'isShippingAddress': (input.officeAddress1 == input.shippingAddress1) ? 'Yes' : 'No',
			'sAddressOne': input.shippingAddress1,
			'sAddressTwo': input.shippingAddress2,
			'countryTwo': shippingCountryState.countryId,
			'zipCodeTwo': input.shippingZipCode,
			'cityTwo': input.shippingCity,
			'stateTwo': shippingCountryState.stateId
		};
	}

	passwordVisibility() {

		if (this.hidePassword) {
			this.hidePassword = false;
			this.hidePasswordIcon = "fa fa-eye";
		} else {
			this.hidePassword = true;
			this.hidePasswordIcon = "fa fa-eye-slash";
		}

	}


	/*
	 * Password Strength
	 */
	strength() {
		console.log("called on change");
		let password = this.accountCreationPersonal.value.password;
		let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
		if (strongRegex.test(password)) {
			this.passwordStrength = "pw-strong";
		} else if (mediumRegex.test(password)) {
			this.passwordStrength = "pw-medium";
		} else if (password != "") {
			this.passwordStrength = "pw-weak";
		} else {
			this.passwordStrength = "pw-none";
		}

		console.log("this strength", this.passwordStrength);
	}

	dateTest() {
		console.log("date =" + JSON.stringify(this.accountCreationPersonal.value.dob.epoc));
		console.log("date =" + JSON.stringify(this.accountCreationPersonal.value.dob.formatted));
	}

}