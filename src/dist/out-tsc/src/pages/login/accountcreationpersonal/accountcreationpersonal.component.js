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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ngx_store_1 = require("ngx-store");
var app_globalcontent_1 = require("../../../app/app.globalcontent");
var AccountcreationpersonalComponent = /** @class */ (function () {
    function AccountcreationpersonalComponent(fb, localStorageService, sessionStorageService, cookiesStorageService, sharedStorageService, router, globalContent) {
        this.fb = fb;
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.cookiesStorageService = cookiesStorageService;
        this.sharedStorageService = sharedStorageService;
        this.router = router;
        this.globalContent = globalContent;
        this.countrySelected = false;
        this.stateSelected = true;
        this.accountCreationPersonalMessage = '';
    }
    AccountcreationpersonalComponent.prototype.ngOnInit = function () {
        this.countries = this.globalContent.countries;
        this.allCountryStates = this.globalContent.states;
        this.accountCreationPersonal = this.fb.group({
            'emailAddress': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,6}?\.[a-zA-Z]{2,6}$')]],
            'password': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{7,20})$')]],
            'username': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-z0-9]{4}[a-z0-9]*$')]],
            'firstName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(20)]],
            'lastName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(20)]],
            'birthDay': ['', [forms_1.Validators.required]],
            'birthMonth': ['', [forms_1.Validators.required]],
            'birthYear': ['', [forms_1.Validators.required]],
            'countryCode': ['', [forms_1.Validators.required]],
            'areaCode': ['', [forms_1.Validators.required]],
            'zipCode': ['', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(6)]],
            'phoneNumber': ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{10}')]],
            'address1': ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(100)]],
            'address2': ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(100)]],
            'country': ['', [forms_1.Validators.required]],
            'state': [{ value: '', disabled: true }, [forms_1.Validators.required]],
            'city': ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(20)]],
            'isShippingAddress': ['Yes']
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
            'isShippingAddress': formData.isShippingAddress
        };
        this.load();
    };
    AccountcreationpersonalComponent.prototype.countrySelect = function (selectedVal) {
        if (selectedVal != "default") {
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
    AccountcreationpersonalComponent.prototype.save = function () {
        this.setInfoInLocalStrorage();
        this.router.navigate(['/accountcreationwallet']);
    };
    AccountcreationpersonalComponent.prototype.back = function () {
        this.router.navigate(['/login']);
    };
    AccountcreationpersonalComponent.prototype.load = function () {
        this.loadFromLocalStrorage();
        var countryVal = this.accountCreationPersonal.value.country;
        if (countryVal != "default") {
            this.countrySelected = true;
            var selectedCountryIndex = parseInt(countryVal) + 1;
            var stateStr = this.allCountryStates[selectedCountryIndex];
            this.states = stateStr.split('|');
            this.stateSelected = false;
            this.accountCreationPersonal.controls.state.enable();
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
            return true;
        }
        else {
            return false;
        }
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