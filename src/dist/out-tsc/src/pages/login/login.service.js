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
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'localhost:7080' })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = 'http://localhost:7080/user/login'; // URL to web api
        this.serviceResponse = {};
    }
    LoginService.prototype.loginUser = function (login, callback) {
        var serviceInput = {
            "username": login.username,
            "password": login.password
        };
        return this.http.post(this.loginUrl, serviceInput, httpOptions).subscribe(function (data) {
            console.log(data.status);
            callback(data);
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LoginService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error('error', error); // log to console instead
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    LoginService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map