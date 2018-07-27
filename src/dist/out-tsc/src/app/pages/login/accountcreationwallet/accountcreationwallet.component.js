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
var AccountcreationwalletComponent = /** @class */ (function () {
    function AccountcreationwalletComponent(router, localStorageService, fb) {
        this.router = router;
        this.localStorageService = localStorageService;
        this.fb = fb;
    }
    AccountcreationwalletComponent.prototype.ngOnInit = function () {
        this.rdwalletaddress = this.fb.group({
            'address': ['', [forms_1.Validators.required]],
        });
        this.load();
    };
    AccountcreationwalletComponent.prototype.save = function () {
        this.setInfoInLocalStrorage();
        this.router.navigate(['/accountcreationoverview']);
    };
    AccountcreationwalletComponent.prototype.back = function () {
        this.router.navigate(['/accountcreationpersonal']);
    };
    AccountcreationwalletComponent.prototype.load = function () {
        this.loadFromLocalStrorage();
    };
    AccountcreationwalletComponent.prototype.setInfoInLocalStrorage = function () {
        this.localStorageService.set('rd_wallet_address', this.rdwalletaddress.value.address);
        return true;
    };
    AccountcreationwalletComponent.prototype.loadFromLocalStrorage = function () {
        var info = this.localStorageService.get('rd_wallet_address');
        if (typeof info == "string" && info != "") {
            this.rdwalletaddress.patchValue({ "address": info });
            return true;
        }
        else {
            return false;
        }
    };
    AccountcreationwalletComponent = __decorate([
        core_1.Component({
            selector: 'app-accountcreationwallet',
            templateUrl: './accountcreationwallet.component.html',
            styleUrls: ['./accountcreationwallet.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            ngx_store_1.LocalStorageService,
            forms_1.FormBuilder])
    ], AccountcreationwalletComponent);
    return AccountcreationwalletComponent;
}());
exports.AccountcreationwalletComponent = AccountcreationwalletComponent;
//# sourceMappingURL=accountcreationwallet.component.js.map