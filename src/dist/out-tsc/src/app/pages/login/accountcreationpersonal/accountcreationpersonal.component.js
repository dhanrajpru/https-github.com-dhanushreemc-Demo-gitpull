"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ngx_store_1 = require("ngx-store");
var app_globalcontent_1 = require("../../../app.globalcontent");
var router_1 = require("@angular/router");
var AccountcreationpersonalComponent = /** @class */ (function () {
    function AccountcreationpersonalComponent(fb, localStorageService, sessionStorageService, cookiesStorageService, sharedStorageService, router, globalContent) {
        this.fb = fb;
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.cookiesStorageService = cookiesStorageService;
        this.sharedStorageService = sharedStorageService;
        this.router = router;
        this.globalContent = globalContent;
    }
    AccountcreationpersonalComponent.prototype.ngOnInit = function () {
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
            'emailAddress': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+?\.[a-zA-Z]{2,6}$')]],
            'password': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{7,20})$')]],
            'username': ['', [forms_1.Validators.required, forms_1.Validators.maxLength(30), forms_1.Validators.pattern('^[a-z0-9]{4}[a-z0-9]*$')]],
            'firstName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(30)]],
            'lastName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(30)]],
            'birthDay': ['', [forms_1.Validators.required]],
            'birthMonth': ['', [forms_1.Validators.required]],
            'birthYear': ['', [forms_1.Validators.required]],
            'countryCode': ['', [forms_1.Validators.required]],
            'areaCode': ['', [forms_1.Validators.required, forms_1.Validators.maxLength(5), forms_1.Validators.pattern('^[0-9]*$')]],
            'zipCode': ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(6)]],
            'phoneNumber': ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{10}')]],
            'address1': ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(100)]],
            'country': ['', [forms_1.Validators.required]],
            'state': [{ value: '', disabled: true }, [forms_1.Validators.required]],
            'city': ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(20)]],
            'isShippingAddress': ['Yes'],
            'address': [''],
            'countryTwo': [''],
            'zipCodeTwo': [''],
            'cityTwo': [''],
            'stateTwo': [{ value: '', disabled: true }]
        });
        var formData = this.accountCreationPersonal.value;
        this.accInfo = {
            'emailAddress': formData.emailAddress,
            'password': formData.password,
            'username': formData.username,
            'firstName': formData.firstName,
            'lastName': formData.lastName,
            'birthDay': formData.birthDay,
            'birthMonth': formData.birthMonth,
            'birthYear': formData.birthYear,
            'countryCode': formData.countryCode,
            'areaCode': formData.areaCode,
            'zipCode': formData.zipCode,
            'phoneNumber': formData.phoneNumber,
            'address1': formData.address1,
            'address2': formData.address2,
            'country': formData.country,
            'state': formData.state,
            'city': formData.city,
            'isShippingAddress': formData.isShippingAddress,
            'address': formData.address,
            'countryTwo': formData.countryTwo,
            'zipCodeTwo': formData.zipCodeTwo,
            'cityTwo': formData.cityTwo,
            'stateTwo': formData.stateTwo
        };
        this.loadFromLocalStrorage();
        this.loadCountriesStates();
        this.loadShippingCountriesStates();
    };
    AccountcreationpersonalComponent.prototype.addressShow = function () {
        this.shippingAdd = true;
    };
    AccountcreationpersonalComponent.prototype.addressHide = function () {
        this.shippingAdd = false;
        this.accountCreationPersonal.patchValue({
            'address': this.accountCreationPersonal.value.address1,
            'countryTwo': this.accountCreationPersonal.value.country,
            'zipCodeTwo': this.accountCreationPersonal.value.zipCode,
            'cityTwo': this.accountCreationPersonal.value.city,
            'stateTwo': this.accountCreationPersonal.value.state
        });
    };
    AccountcreationpersonalComponent.prototype.countrySelect = function (selectedVal) {
        if (selectedVal != "" && (selectedVal == 0 || selectedVal > 0)) {
            this.countrySelected = true;
            var selectedCountryIndex = parseInt(selectedVal) + 1;
            var stateStr = this.allCountryStates[selectedCountryIndex];
            this.states = stateStr.split('|');
            this.stateSelected = false;
            this.accountCreationPersonal.controls.state.enable();
        }
        else {
            this.states = [];
            this.stateSelected = true;
            this.accountCreationPersonal.controls.state.disable();
        }
    };
    AccountcreationpersonalComponent.prototype.countrySelectTwo = function (selectedVal) {
        if (selectedVal != "" && (selectedVal == 0 || selectedVal > 0)) {
            this.countrySelectedTwo = true;
            var selectedCountryIndexTwo = parseInt(selectedVal) + 1;
            var stateStrTwo = this.allCountryStatesTwo[selectedCountryIndexTwo];
            this.statesTwo = stateStrTwo.split('|');
            this.stateSelectedTwo = false;
            this.accountCreationPersonal.controls.stateTwo.enable();
        }
        else {
            this.statesTwo = [];
            this.stateSelectedTwo = true;
            this.accountCreationPersonal.controls.stateTwo.disable();
        }
    };
    AccountcreationpersonalComponent.prototype.save = function () {
        this.setInfoInLocalStrorage();
        // this.router.navigate(['/callOrTextMFARequest']);
        this.router.navigate(['/accountcreationwallet']);
    };
    AccountcreationpersonalComponent.prototype.back = function () {
        this.router.navigate(['/login']);
    };
    AccountcreationpersonalComponent.prototype.loadCountriesStates = function () {
        var countryVal = this.accountCreationPersonal.value.country;
        if (countryVal != "" && (countryVal == 0 || countryVal > 0)) {
            this.countrySelected = true;
            var selectedCountryIndex = parseInt(countryVal) + 1;
            var stateStr = this.allCountryStates[selectedCountryIndex];
            this.states = stateStr.split('|');
            this.stateSelected = false;
            this.accountCreationPersonal.controls.state.enable();
        }
    };
    AccountcreationpersonalComponent.prototype.loadShippingCountriesStates = function () {
        var countryVal = this.accountCreationPersonal.value.countryTwo;
        if (countryVal != "" && (countryVal == 0 || countryVal > 0)) {
            this.countrySelectedTwo = true;
            var selectedCountryIndexTwo = parseInt(countryVal) + 1;
            var stateStrTwo = this.allCountryStatesTwo[selectedCountryIndexTwo];
            this.statesTwo = stateStrTwo.split('|');
            this.stateSelectedTwo = false;
            this.accountCreationPersonal.controls.stateTwo.enable();
        }
    };
    AccountcreationpersonalComponent.prototype.setInfoInLocalStrorage = function () {
        this.localStorageService.set('account_creation_personal_info', this.accountCreationPersonal.value);
        return true;
    };
    AccountcreationpersonalComponent.prototype.loadFromLocalStrorage = function () {
        var info = this.localStorageService.get('account_creation_personal_info');
        if (typeof info == "object" && info != {}) {
            this.accountCreationPersonal.patchValue(info);
            if (info.isShippingAddress == 'No') {
                this.addressShow();
            }
            return true;
        }
        else {
            return false;
        }
    };
    AccountcreationpersonalComponent.prototype.passwordVisibility = function () {
        if (this.hidePassword) {
            this.hidePassword = false;
            this.hidePasswordIcon = "fa fa-eye";
        }
        else {
            this.hidePassword = true;
            this.hidePasswordIcon = "fa fa-eye-slash";
        }
    };
    AccountcreationpersonalComponent.prototype.strength = function () {
        console.log("called on change");
        var password = this.accountCreationPersonal.value.password;
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegex.test(password)) {
            this.passwordStrength = "pw-strong";
        }
        else if (mediumRegex.test(password)) {
            this.passwordStrength = "pw-medium";
        }
        else if (password != "") {
            this.passwordStrength = "pw-weak";
        }
        else {
            this.passwordStrength = "pw-none";
        }
        console.log("this strength", this.passwordStrength);
    };
    AccountcreationpersonalComponent = __decorate([
        core_1.Component({
            selector: 'app-accountcreationpersonal',
            templateUrl: './accountcreationpersonal.component.html',
            styleUrls: ['./accountcreationpersonal.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            ngx_store_1.LocalStorageService,
            ngx_store_1.SessionStorageService,
            ngx_store_1.CookiesStorageService,
            ngx_store_1.SharedStorageService,
            router_1.Router,
            app_globalcontent_1.GlobalContent])
    ], AccountcreationpersonalComponent);
    return AccountcreationpersonalComponent;
}());
exports.AccountcreationpersonalComponent = AccountcreationpersonalComponent;
//# sourceMappingURL=accountcreationpersonal.component.js.map