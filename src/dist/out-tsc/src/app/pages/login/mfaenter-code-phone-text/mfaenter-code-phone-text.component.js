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
var MFAEnterCodePhoneTextComponent = /** @class */ (function () {
    function MFAEnterCodePhoneTextComponent(fb) {
        this.fb = fb;
        this.hidePassword = true;
        this.hidePasswordIcon = "fa fa-eye-slash";
    }
    MFAEnterCodePhoneTextComponent.prototype.ngOnInit = function () {
        this.mfaEnterPhoneText = this.fb.group({
            'code': ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{5}')]],
            'pass': ['', [forms_1.Validators.required]]
        });
    };
    MFAEnterCodePhoneTextComponent.prototype.passwordVisibility = function () {
        if (this.hidePassword) {
            this.hidePassword = false;
            this.hidePasswordIcon = "fa fa-eye";
        }
        else {
            this.hidePassword = true;
            this.hidePasswordIcon = "fa fa-eye-slash";
        }
    };
    MFAEnterCodePhoneTextComponent = __decorate([
        core_1.Component({
            selector: 'app-mfaenter-code-phone-text',
            templateUrl: './mfaenter-code-phone-text.component.html',
            styleUrls: ['./mfaenter-code-phone-text.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], MFAEnterCodePhoneTextComponent);
    return MFAEnterCodePhoneTextComponent;
}());
exports.MFAEnterCodePhoneTextComponent = MFAEnterCodePhoneTextComponent;
//# sourceMappingURL=mfaenter-code-phone-text.component.js.map