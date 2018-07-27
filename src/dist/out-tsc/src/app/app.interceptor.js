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
var operators_1 = require("rxjs/operators");
var AuthRequest = /** @class */ (function () {
    function AuthRequest() {
        this.nonAuthenticatedRequests = [
            'http://localhost:7080/user/login',
            'http://localhost:7080/user/create'
        ];
    }
    AuthRequest.prototype.isAuthRequest = function (requrl) {
        var flag = true;
        for (var key in this.nonAuthenticatedRequests) {
            if (this.nonAuthenticatedRequests[key] == requrl) {
                flag = false;
                return;
            }
        }
        return flag;
    };
    AuthRequest = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthRequest);
    return AuthRequest;
}());
var AppInterceptor = /** @class */ (function () {
    function AppInterceptor() {
    }
    AppInterceptor.prototype.intercept = function (req, next) {
        var body = req.body;
        var reqObject = req;
        var authReqObj = new AuthRequest();
        if (authReqObj.isAuthRequest(req.url)) {
            console.log('intercepted request', req);
            var authReq = req.clone({
                headers: req.headers.set('x-access-token', ''),
                body: body
            });
            reqObject = authReq;
        }
        return next.handle(reqObject).pipe(operators_1.map(function (response) {
            if (reqObject.url == "http://localhost:7080/user/login") {
                console.log(" response block ");
            }
            console.log('Intercepted Response', response);
            return response;
        }));
    };
    AppInterceptor = __decorate([
        core_1.Injectable()
    ], AppInterceptor);
    return AppInterceptor;
}());
exports.AppInterceptor = AppInterceptor;
//# sourceMappingURL=app.interceptor.js.map