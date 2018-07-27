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
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'localhost:7080' })
};
var AccountCreationOverviewService = /** @class */ (function () {
    function AccountCreationOverviewService(http) {
        this.http = http;
        this.accountCreationUrl = 'http://localhost:7080/user/create'; // URL to web api
        this.serviceResponse = {};
    }
    AccountCreationOverviewService.prototype.registerUser = function (info, callback) {
        return this.http.post(this.accountCreationUrl, info, httpOptions).subscribe(function (data) {
            callback(data);
        }, function (err) {
            console.log(err);
        });
    };
    AccountCreationOverviewService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AccountCreationOverviewService);
    return AccountCreationOverviewService;
}());
exports.AccountCreationOverviewService = AccountCreationOverviewService;
//# sourceMappingURL=accountcreationoverview.service.js.map