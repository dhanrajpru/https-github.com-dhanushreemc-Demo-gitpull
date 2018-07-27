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
var AccountcreationoverviewComponent = require("../accountcreationoverview.component");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(oc) {
        this.oc = oc;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.createAccount = function () {
        console.log('trigger account service');
        var personalInfo = this.localStorageService.get('account_creation_personal_info');
        var walletAddress = this.localStorageService.get('rd_wallet_address');
        var stateCountry = this.castStateAndCountry(personalInfo.country, personalInfo.state);
        var selectedCountry = stateCountry.country;
        var selectedState = stateCountry.state;
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
            "officeState": selectedState,
            "officeCity": personalInfo.city,
            "officeZipCode": personalInfo.zipCode,
            "officeCountry": selectedCountry,
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
        // this.rs.registerUser(finalInfoObject, function (response) {
        // 	console.log('waited for response', response);
        // 	if (response.status) {
        // 		thisObj.localStorageService.set('account_creation_personal_info', '');
        // 		thisObj.localStorageService.set('rd_wallet_address', '');
        // 		thisObj.router.navigate(['/accountpage']);
        // 		console.log("registration success");
        // 	} else {
        // 		console.log("registration failed");
        // 	}
        // });
        thisObj.router.navigate(['/accountpage']);
    };
    var _a;
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof AccountcreationoverviewComponent !== "undefined" && AccountcreationoverviewComponent) === "function" && _a || Object])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.component.js.map