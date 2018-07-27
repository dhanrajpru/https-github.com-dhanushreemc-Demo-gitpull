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
var MFAEnterCodeEmailComponent = /** @class */ (function () {
    function MFAEnterCodeEmailComponent(fb) {
        this.fb = fb;
        this.hidePassword = true;
        this.hidePasswordIcon = "fa fa-eye-slash";
    }
    MFAEnterCodeEmailComponent.prototype.ngOnInit = function () {
        this.mfaCodeEmail = this.fb.group({
            'tempIdentifCode': ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{5}')]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    MFAEnterCodeEmailComponent.prototype.passwordVisibility = function () {
        if (this.hidePassword) {
            this.hidePassword = false;
            this.hidePasswordIcon = "fa fa-eye";
        }
        else {
            this.hidePassword = true;
            this.hidePasswordIcon = "fa fa-eye-slash";
        }
    };
    MFAEnterCodeEmailComponent = __decorate([
        core_1.Component({
            selector: 'app-mfaenter-code-email',
            templateUrl: './mfaenter-code-email.component.html',
            styleUrls: ['./mfaenter-code-email.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], MFAEnterCodeEmailComponent);
    return MFAEnterCodeEmailComponent;
}());
exports.MFAEnterCodeEmailComponent = MFAEnterCodeEmailComponent;
//# sourceMappingURL=mfaenter-code-email.component.js.map