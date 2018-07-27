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
var login_service_1 = require("./login.service");
var forms_1 = require("@angular/forms");
var ngx_store_1 = require("ngx-store");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(localstorageService, ls, fb, router) {
        this.localstorageService = localstorageService;
        this.ls = ls;
        this.fb = fb;
        this.router = router;
        this.hidePassword = true;
        this.hidePasswordIcon = "fa fa-eye-slash";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.accountLogin = this.fb.group({
            'username': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z]+[0-9]+[a-zA-Z0-9]*$')]],
            'password': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{7,20})$')]],
            'rememberMe': [false]
        });
        this.loadUserCredentials();
    };
    LoginComponent.prototype.remember = function () {
        var remMe = this.accountLogin.value.rememberMe;
        if (remMe) {
            remMe = false;
        }
        else {
            remMe = true;
        }
    };
    LoginComponent.prototype.rememberCredentials = function () {
        var userCredentials = {
            "username": this.accountLogin.value.username,
            "password": this.accountLogin.value.password,
        };
        this.localstorageService.set('usercred', userCredentials);
    };
    LoginComponent.prototype.forgetCredentials = function () {
        var userCredentials = {
            "username": '',
            "password": '',
        };
        this.accountLogin.value.rememberMe = false;
        this.localstorageService.set('usercred', userCredentials);
    };
    LoginComponent.prototype.loadUserCredentials = function () {
        var usercred = this.localstorageService.get('usercred');
        // if(typeof usercred != "undefined" && typeof usercred != "null"){
        //   if(typeof usercred.username != "undefined" && typeof usercred.password != "undefined" && usercred.username != "" &&  usercred.password != ""){
        //     this.accountLogin.patchValue({
        //       "username": usercred.username,
        //       "password": usercred.username,
        //       "rememberMe": true
        //     });
        //   }
        // }
    };
    LoginComponent.prototype.login = function () {
        var thisObj = this;
        var userCredentials = {
            "username": this.accountLogin.value.username,
            "password": this.accountLogin.value.password,
        };
        this.ls.loginUser(userCredentials, function (response) {
            if (response.status) {
                if (thisObj.accountLogin.value.rememberMe) {
                    thisObj.rememberCredentials();
                }
                else {
                    thisObj.forgetCredentials();
                }
                thisObj.loginMessage = '';
                thisObj.localstorageService.set('x-access-token', response.token);
                thisObj.router.navigate(['/accountpage']);
            }
            else {
                thisObj.loginMessage = 'Invalid username or password';
            }
        });
        thisObj.router.navigate(['/accountpage']);
    };
    LoginComponent.prototype.passwordVisibility = function () {
        if (this.hidePassword) {
            this.hidePassword = false;
            this.hidePasswordIcon = "fa fa-eye";
        }
        else {
            this.hidePassword = true;
            this.hidePasswordIcon = "fa fa-eye-slash";
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [ngx_store_1.LocalStorageService,
            login_service_1.LoginService,
            forms_1.FormBuilder,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map