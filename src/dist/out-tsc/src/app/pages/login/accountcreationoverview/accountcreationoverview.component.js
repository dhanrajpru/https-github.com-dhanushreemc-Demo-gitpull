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
var accountcreationoverview_service_1 = require("./accountcreationoverview.service");
var app_globalcontent_1 = require("../../../app.globalcontent");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var dialog_component_1 = require("./dialog/dialog.component");
var app_globalhelper_1 = require("../../../app.globalhelper");
var AccountcreationoverviewComponent = /** @class */ (function () {
    function AccountcreationoverviewComponent(fb, dialog, rs, localStorageService, sessionStorageService, cookiesStorageService, sharedStorageService, globalContent, router, globalHelper) {
        this.fb = fb;
        this.dialog = dialog;
        this.rs = rs;
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.cookiesStorageService = cookiesStorageService;
        this.sharedStorageService = sharedStorageService;
        this.globalContent = globalContent;
        this.router = router;
        this.globalHelper = globalHelper;
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
    AccountcreationoverviewComponent.prototype.showEligibilityModal = function () {
        var eligiblityModal = document.getElementById("elgibilityModal");
        eligiblityModal.style.display = "block";
        console.log("here");
    };
    AccountcreationoverviewComponent.prototype.load = function () {
        this.loadFromLocalStrorage();
    };
    AccountcreationoverviewComponent.prototype.loadFromLocalStrorage = function () {
        var info = this.localStorageService.get('account_creation_personal_info');
        this.walletAddress = this.localStorageService.get('rd_wallet_address') ? this.localStorageService.get('rd_wallet_address') : '';
        if (typeof info == "object" && info != {}) {
            var stateCountry = this.globalHelper.castStateAndCountry(this.info.country, info.state);
            info.country = stateCountry.country;
            info.state = stateCountry.state;
            var stateCountryTwo = this.globalHelper.castStateAndCountry(info.countryTwo, info.stateTwo);
            info.countryTwo = stateCountryTwo.country;
            info.stateTwo = stateCountryTwo.state;
            this.accInfo = info;
            return true;
        }
        else {
            return false;
        }
    };
    AccountcreationoverviewComponent.prototype.next = function () {
        this.router.navigate(['/dialog']);
    };
    AccountcreationoverviewComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            height: '400px',
            width: '600px',
        });
    };
    AccountcreationoverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-accountcreationoverview',
            templateUrl: './accountcreationoverview.component.html',
            styleUrls: ['./accountcreationoverview.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            material_1.MatDialog,
            accountcreationoverview_service_1.AccountCreationOverviewService,
            ngx_store_1.LocalStorageService,
            ngx_store_1.SessionStorageService,
            ngx_store_1.CookiesStorageService,
            ngx_store_1.SharedStorageService,
            app_globalcontent_1.GlobalContent,
            router_1.Router,
            app_globalhelper_1.GlobalHelper])
    ], AccountcreationoverviewComponent);
    return AccountcreationoverviewComponent;
}());
exports.AccountcreationoverviewComponent = AccountcreationoverviewComponent;
//# sourceMappingURL=accountcreationoverview.component.js.map