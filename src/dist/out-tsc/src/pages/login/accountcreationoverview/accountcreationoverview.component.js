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
var accountcreationoverview_service_1 = require("./accountcreationoverview.service");
var AccountcreationoverviewComponent = /** @class */ (function () {
    function AccountcreationoverviewComponent(fb, rs, localStorageService, sessionStorageService, cookiesStorageService, sharedStorageService, globalContent, router) {
        this.fb = fb;
        this.rs = rs;
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.cookiesStorageService = cookiesStorageService;
        this.sharedStorageService = sharedStorageService;
        this.globalContent = globalContent;
    }
    AccountcreationoverviewComponent.prototype.ngOnInit = function () {
        this.walletAddress = "";
        this.accInfo = {
            'emailAddress': "asdad",
            'password': "",
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
            'isShippingAddress': ""
        };
        this.load();
    };
    AccountcreationoverviewComponent.prototype.back = function () {
        this.router.navigate(['/accountcreationwallet']);
    };
    AccountcreationoverviewComponent.prototype.createAccount = function () {
        console.log('trigger account service');
        var personalInfo = this.localStorageService.get('account_creation_personal_info');
        var walletAddress = this.localStorageService.get('rd_wallet_address');
        var finalInfoObject = {
            "emailAddress": personalInfo.emailAddress,
            "password": personalInfo.password,
            "firstName": personalInfo.firstName,
            "lastName": personalInfo.lastName,
            "username": personalInfo.username,
            "dateOfBirth": personalInfo.birthYear + '-' + personalInfo.birthMonth + '-' + personalInfo.birthDay,
            "companyName": "hashcode technologies",
            "officeAddress1": personalInfo.address1,
            "officeAddress2": personalInfo.address2,
            "officeState": personalInfo.state,
            "officeCity": personalInfo.city,
            "officeZipCode": personalInfo.zipCode,
            "officeCountry": personalInfo.country,
            "shippingAddress1": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.address1 : '',
            "shippingAddress2": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.address1 : '',
            "shippingCity": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.city : '',
            "shippingState": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.state : '',
            "shippingZipCode": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.zipCode : 0,
            "shippingCountry": (personalInfo.isShippingAddress == 'Yes') ? personalInfo.country : '',
            "phoneNumber": personalInfo.phoneNumber,
            "zervPublicKey": walletAddress,
            "shippingAddressValidationFlag": true,
            "elegibilityForRestrictedItemsFlag": false
        };
        var thisObj = this;
        this.rs.registerUser(finalInfoObject, function (response) {
            console.log('waited for response', response);
            if (response.status) {
                thisObj.localStorageService.set('account_creation_personal_info', '');
                thisObj.localStorageService.set('rd_wallet_address', '');
                thisObj.router.navigate(['/accountpage']);
                console.log("registration success");
            }
            else {
                console.log("registration failed");
            }
        });
    };
    AccountcreationoverviewComponent.prototype.load = function () {
        this.loadFromLocalStrorage();
    };
    AccountcreationoverviewComponent.prototype.loadFromLocalStrorage = function () {
        var info = this.localStorageService.get('account_creation_personal_info');
        this.walletAddress = this.localStorageService.get('rd_wallet_address') ? this.localStorageService.get('rd_wallet_address') : '';
        if (typeof info == "object" && info != {}) {
            this.accInfo = info;
            return true;
        }
        else {
            return false;
        }
    };
    AccountcreationoverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-accountcreationoverview',
            templateUrl: './accountcreationoverview.component.html',
            styleUrls: ['./accountcreationoverview.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            accountcreationoverview_service_1.AccountCreationOverviewService,
            ngx_store_1.LocalStorageService,
            ngx_store_1.SessionStorageService,
            ngx_store_1.CookiesStorageService,
            ngx_store_1.SharedStorageService, Object, router_1.Router])
    ], AccountcreationoverviewComponent);
    return AccountcreationoverviewComponent;
}());
exports.AccountcreationoverviewComponent = AccountcreationoverviewComponent;
//# sourceMappingURL=accountcreationoverview.component.js.map