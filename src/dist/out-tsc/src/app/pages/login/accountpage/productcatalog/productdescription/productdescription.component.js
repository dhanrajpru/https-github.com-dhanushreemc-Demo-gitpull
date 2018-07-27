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
var ProductdescriptionComponent = /** @class */ (function () {
    function ProductdescriptionComponent() {
        this.productId = 545455;
        this.productName = "Product1";
        this.vendorCode = 326517;
        this.vendorName = "xyzvendor";
        this.minimumOrderQuantity = 100;
        this.maximumOrderQuantity = 1000;
        this.orderQuantity = 1;
        this.unitOfMeasure = 66;
        this.unitPrice = 1500;
        this.weight = 1;
        this.individualPkgLength = 23;
        this.individualPkgWidth = 12;
        this.individualPkgHeight = 13;
        this.palletLength = 10;
        this.palletWidth = 10;
        this.palletHeight = 10;
        this.ageRestrictionFlag = true;
        this.ageRestriction = 18;
        this.geoRestrictionFlag = "yes/no";
        this.lastUpdateDate = "2018-08-04T18:30:00.000Z";
        this.lastUpdateBy = "shiva kumar p";
        this.creationDate = "2018-08-04T18:30:00.000Z";
        this.createdBy = "shiva kumar p";
    }
    ProductdescriptionComponent.prototype.ngOnInit = function () {
    };
    ProductdescriptionComponent = __decorate([
        core_1.Component({
            selector: 'app-productdescription',
            templateUrl: './productdescription.component.html',
            styleUrls: ['./productdescription.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ProductdescriptionComponent);
    return ProductdescriptionComponent;
}());
exports.ProductdescriptionComponent = ProductdescriptionComponent;
//# sourceMappingURL=productdescription.component.js.map